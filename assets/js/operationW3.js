// import web3 from 'web3'
const totalAmount = 6666;
let mintedAmount = 198;

window.addEventListener('load', function () {

    $(".connectbtn").text("CONNECT");
    $(".mintedAmunt").text(restAmount + '/' + totalAmount);
    // Load WEB3
    // Check wether it's already injected by something else (like Metamask or Parity Chrome plugin)
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


$(".connectbtn").on("click", async function () {
    import { Connection, clusterApiUrl } from "@solana/web3.js";

    const networks = {
        mainnet: {
            url: "https://solana-api.projectserum.com",
            displayName: "Mainnet Beta",
        },
        devnet: { url: clusterApiUrl("devnet"), displayName: "Devnet" },
        testnet: { url: clusterApiUrl("testnet"), displayName: "Testnet" },
    };

    const solanaNetwork = networks.devnet;
    const connection = new Connection(solanaNetwork.url);

    useEffect(() => {
        setLoading(true)
        const sdkInstance = new OpenLogin({
            clientId: "YOUR_PROJECT_ID",
            network: "testnet"
        });
        async function initializeOpenlogin() {
            await sdkInstance.init();
            if (sdkInstance.privKey) {
      // qpp has access ot private key now
      ...
      ...
    }
    setSdk(sdkInstance);
setLoading(false)
  }
initializeOpenlogin();
}, []);

async function handleLogin() {
    setLoading(true);
    try {
        const privKey = await openlogin.login({
            loginProvider: "google",
            redirectUrl: `${window.origin}`,
        });
        const solanaPrivateKey = getSolanaPrivateKey(privKey);
        await getAccountInfo(solanaNetwork.url, solanaPrivateKey);
        setLoading(false);
    } catch (error) {
        console.log("error", error);
        setLoading(false);
    }
}

const getSolanaPrivateKey = (openloginKey) => {
    const { sk } = getED25519Key(openloginKey);
    return sk;
};

const getAccountInfo = async (connectionUrl, solanaPrivateKey) => {
    const account = new Account(solanaPrivateKey);
    const connection = new Connection(connectionUrl);
    const accountInfo = await connection.getAccountInfo(account.publicKey);
    setPrivateKey(bs58.encode(account.secretKey));
    setUserAccount(account);
    setUserAccountInfo(accountInfo);
    return accountInfo;
};

const handleLogout = async () => {
    setLoading(true);
    await openlogin.logout();
    setLoading(false);
};
    $("#ethBalance").text(result);
    $(".connectbtn").text("CONNECTED");

})
$("#nftBuy").on("click", function () {

    let restAmount = 2000;
    let mintAmount = $("#mintAmount").val();
    let cost = 0.0017;
    if (mintAmount > restAmount) {
        $("#nftBut").text("BUY");
        $("#nftBut").attr(onclick, "window.location.href='https://Opensea.io';");
        $("#mintAmount").val("0");
        $(".mintedAmunt").text("SOLD OUT");


    } else {
        $("#nftBut").text("OPENSEA");
        $("#nftBut").removeAttr("onclick");
        console.log(parseFloat(cost) * parseInt(mintAmount));
        $(".nftCost").text(parseFloat(cost) * parseInt(mintAmount));
        // $("#mybar").value("")
    }
})