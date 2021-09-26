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


$(".connectbtn").on("click", export type ConnectionConfig = {
    /** Optional commitment level */
    commitment?: Commitment;
    /** Optional endpoint URL to the fullnode JSON RPC PubSub WebSocket Endpoint */
    wsEndpoint?: string;
    /** Optional HTTP headers object */
    httpHeaders?: HttpHeaders;
    /** Optional fetch middleware callback */
    fetchMiddleware?: FetchMiddleware;
    /** Optional Disable retring calls when server responds with HTTP 429 (Too Many Requests) */
    disableRetryOnRateLimit?: boolean;
    /** time to allow for the server to initially process a transaction (in milliseconds) */
    confirmTransactionInitialTimeout?: number;

})
$("#nftBuy").on("click", function() {

    let restAmount = 2000;
    let mintAmount = $("#mintAmount").val();
    let cost = 0.05;
    if (mintAmount > restAmount) {
        $("#nftBut").text("BUY");
        $("#nftBut").attr(onclick, "window.location.href='https://Solsea.io';");
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