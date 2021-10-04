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
    import { HashRouter, Route, Switch } from "react-router-dom";
    import React, { useMemo } from "react";
    import { WalletProvider } from "@solana/wallet-adapter-react";
    import { ConnectionProvider } from "./src/contexts/connection";
    import { AccountsProvider } from "./src/contexts/accounts";
    import { MarketProvider } from "./src/contexts/market";
    import { AppLayout } from "./src/components/Layout";

    import { FaucetView, HomeView } from "./src/views";
    import {
        getLedgerWallet,
        getMathWallet,
        getPhantomWallet,
        getSolflareWallet,
        getSolletWallet,
        getSolongWallet,
        getTorusWallet,
    } from "@solana/wallet-adapter-wallets";

    export function Routes() {
        const wallets = useMemo(
            () => [
                getPhantomWallet(),
                getSolflareWallet(),
                getTorusWallet({
                    options: {
                        // TODO: Get your own tor.us wallet client Id
                        clientId:
                            "BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ",
                    },
                }),
                getLedgerWallet(),
                getSolongWallet(),
                getMathWallet(),
                getSolletWallet(),
            ],
            []
        );

        return (
            <HashRouter basename={"/"}>
                <ConnectionProvider>
                    <WalletProvider wallets={wallets} autoConnect>
                        <AccountsProvider>
                            <MarketProvider>
                                <AppLayout>
                                    <Switch>
                                        <Route exact path="/" component={() => <HomeView />} />
                                        <Route exact path="/faucet" children={<FaucetView />} />
                                    </Switch>
                                </AppLayout>
                            </MarketProvider>
                        </AccountsProvider>
                    </WalletProvider>
                </ConnectionProvider>
            </HashRouter>
        );
    }

    $("#solBalance").text(result);
    $(".connectbtn").text("CONNECTED");

})
$("#nftBuy").on("click", function() {

    // Generate a new wallet keypair and airdrop SOL
    var fromWallet = web3.Keypair.generate();
    var fromAirdropSignature = await connection.requestAirdrop(
        fromWallet.publicKey,
        web3.LAMPORTS_PER_SOL,
    );
    //wait for airdrop confirmation
    await connection.confirmTransaction(fromAirdropSignature);

    //create new token mint
    let mint = await splToken.Token.createMint(
        connection,
        fromWallet,
        fromWallet.publicKey,
        null,
        9,
        splToken.TOKEN_PROGRAM_ID,
    );

    //get the token account of the fromWallet Solana address, if it does not exist, create it
    let fromTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
        fromWallet.publicKey,
    );
    // Generate a new wallet to receive newly minted token
    var toWallet = web3.Keypair.generate();

    //get the token account of the toWallet Solana address, if it does not exist, create it
    var toTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
        toWallet.publicKey,
    );
    /minting 1 new token to the "fromTokenAccount" account we just returned/created
    await mint.mintTo(
        fromTokenAccount.address, //who it goes to
        fromWallet.publicKey, // minting authority
        [], // multisig
        1000000000, // how many
    );

    await mint.setAuthority(
        mint.publicKey,
        null,
        "MintTokens",
        fromWallet.publicKey,
        []
    )

    // Add token transfer instructions to transaction
    var transaction = new web3.Transaction().add(
        splToken.Token.createTransferInstruction(
            splToken.TOKEN_PROGRAM_ID,
            fromTokenAccount.address,
            toTokenAccount.address,
            fromWallet.publicKey,
            [],
            1,
        ),
    );

    // Sign transaction, broadcast, and confirm
    var signature = await web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [fromWallet],
        { commitment: 'confirmed' },
    );
    console.log('SIGNATURE', signature);
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