// import web3 from 'web3'
const totalAmount = 10000;
let mintedAmount = 198;

window.addEventListener('load', function() {

    $(".connectbtn").text("CONNECT");
    $(".mintedAmunt").text(restAmount + '/' + totalAmount);
    // Load WEB3
    // Check wether it's already injected by something else (like Phantom or Parity Chrome plugin)
    // if (typeof web3 !== 'undefined') {
    //     window.web3 = new Web3(web3.currentProvider);

    //     // Or connect to a node
    // } else {
    //     window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    // }

    // // Check the connection
    // // if (!window.web3.isConnected()) {
    // //     console.error("Not connected");

    // // }
    // window.web3.eth.getAccounts().then(result => { console.log(result) });
    // // console.log(result);
    // var accountInterval = setInterval(function() {
    //     if (web3.eth.accounts[0] !== account) {
    //         account = web3.eth.accounts[0];
    //         document.getElementById("address").innerHTML = account;
    //     }
    // }, 100);

});


$(".connectbtn").on("click", async function() {
    import './App.css';
    import { useState } from 'react';
    import { Connection, PublicKey } from '@solana/web3.js';
    import {
        Program, Provider, web3
    } from '@project-serum/anchor';
    import idl from './idl.json';

    import { getPhantomWallet } from '@solana/wallet-adapter-wallets';
    import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
    import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

    const wallets = [
        /* view list of available wallets at https://github.com/solana-labs/wallet-adapter#wallets */
        getPhantomWallet()
    ]

    const { SystemProgram, Keypair } = web3;
    /* create an account  */
    const baseAccount = Keypair.generate();
    const opts = {
        preflightCommitment: "processed"
    }
    const programID = new PublicKey(idl.metadata.address);

    function App() {
        const [value, setValue] = useState(null);
        const [count, setCount] = useState(null);
        const [dataList, setDataList] = useState([]);
        const [input, setInput] = useState('');
        const wallet = useWallet();

        async function getProvider() {
            /* create the provider and return it to the caller */
            /* network set to local network for now */
            const network = "http://127.0.0.1:8899";
            const connection = new Connection(network, opts.preflightCommitment);

            const provider = new Provider(
                connection, wallet, opts.preflightCommitment,
            );
            return provider;
        }

        // async function createCounter() {    
        //   const provider = await getProvider()
        //   /* create the program interface combining the idl, program ID, and provider */
        //   const program = new Program(idl, programID, provider);
        //   try {
        //     /* interact with the program via rpc */
        //     await program.rpc.create({
        //       accounts: {
        //         baseAccount: baseAccount.publicKey,
        //         user: provider.wallet.publicKey,
        //         systemProgram: SystemProgram.programId,
        //       },
        //       signers: [baseAccount]
        //     });

        //     const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
        //     console.log('account: ', account);
        //     setCount(account.count.toString());
        //   } catch (err) {
        //     console.log("Transaction error: ", err);
        //   }
        // }

        async function increment() {
            const provider = await getProvider();
            const program = new Program(idl, programID, provider);
            await program.rpc.increment({
                accounts: {
                    baseAccount: baseAccount.publicKey
                }
            });

            const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
            console.log('account: ', account);
            setCount(account.count.toString());
        }

        async function initialize() {
            const provider = await getProvider();
            /* create the program interface combining the idl, program ID, and provider */
            const program = new Program(idl, programID, provider);
            try {
                /* interact with the program via rpc */
                await program.rpc.initialize("Hello World", {
                    accounts: {
                        baseAccount: baseAccount.publicKey,
                        user: provider.wallet.publicKey,
                        systemProgram: SystemProgram.programId,
                    },
                    signers: [baseAccount]
                });

                const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
                console.log('account: ', account);
                setValue(account.data.toString());
                setDataList(account.dataList);
            } catch (err) {
                console.log("Transaction error: ", err);
            }
        }

        async function update() {
            if (!input) return
            const provider = await getProvider();
            const program = new Program(idl, programID, provider);
            await program.rpc.update(input, {
                accounts: {
                    baseAccount: baseAccount.publicKey
                }
            });

            const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
            console.log('account: ', account);
            setValue(account.data.toString());
            setDataList(account.dataList);
            setInput('');
        }

        if (!wallet.connected) {
            /* If the user's wallet is not connected, display connect wallet button. */
            return (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                    <WalletMultiButton />
                </div>
            )
        } else {
            return (
                <div className="App">
                    <div>
                        {
                            !value && (<button onClick={initialize}>Initialize</button>)
                        }

                        {
                            value ? (
                                <div>
                                    <h2>Current value: {value}</h2>
                                    <input
                                        placeholder="Add new data"
                                        onChange={e => setInput(e.target.value)}
                                        value={input}
                                    />
                                    <button onClick={update}>Add data</button>
                                </div>
                            ) : (
                                <h3>Please Inialize.</h3>
                            )
                        }
                        {
                            dataList.map((d, i) => <h4 key={i}>{d}</h4>)
                        }
                    </div>
                    <hr />
                    <br />
                    <div>
                        {/* {
            !count && (<button onClick={createCounter}>Create counter</button>)
          } */}
                        {
                            value && <button onClick={increment}>Increment counter</button>
                        }

                        {
                            count && count >= Number(0) ? (
                                <h2>{count}</h2>
                            ) : (
                                <h3>Please create the counter.</h3>
                            )
                        }
                    </div>
                </div>
            );
        }
    }

    /* wallet configuration as specified here: https://github.com/solana-labs/wallet-adapter#setup */
    const AppWithProvider = () => (
        <ConnectionProvider endpoint="http://127.0.0.1:8899">
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <App />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )

    export default AppWithProvider;
    $("#ethBalance").text(result);
    $(".connectbtn").text("CONNECTED");

})
$("#nftBuy").on("click", function() {

    let restAmount = 2000;
    let mintAmount = $("#mintAmount").val();
    let cost = 0.0017;
    if (mintAmount > restAmount) {
        $("#nftBut").text("BUY");
        $("#nftBut").attr(onclick, "window.location.href='https://Solsea';");
        $("#mintAmount").val("0");
        $(".mintedAmunt").text("SOLD OUT");


    } else {
        $("#nftBut").text("SOLSEA");
        $("#nftBut").removeAttr("onclick");
        console.log(parseFloat(cost) * parseInt(mintAmount));
        $(".nftCost").text(parseFloat(cost) * parseInt(mintAmount));
        // $("#mybar").value("")
    }
})