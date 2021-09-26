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


$(".connectbtn").on("click", async function () {
    /**
 * A connection to a fullnode JSON RPC endpoint
 */
    export class Connection {
  /** @internal */ _commitment?: Commitment;
  /** @internal */ _confirmTransactionInitialTimeout?: number;
  /** @internal */ _rpcEndpoint: string;
  /** @internal */ _rpcWsEndpoint: string;
  /** @internal */ _rpcClient: RpcClient;
  /** @internal */ _rpcRequest: RpcRequest;
  /** @internal */ _rpcBatchRequest: RpcBatchRequest;
  /** @internal */ _rpcWebSocket: RpcWebSocketClient;
  /** @internal */ _rpcWebSocketConnected: boolean = false;
  /** @internal */ _rpcWebSocketHeartbeat: ReturnType<
        typeof setInterval
    > | null = null;
  /** @internal */ _rpcWebSocketIdleTimeout: ReturnType<
        typeof setTimeout
    > | null = null;

  /** @internal */ _disableBlockhashCaching: boolean = false;
  /** @internal */ _pollingBlockhash: boolean = false;
  /** @internal */ _blockhashInfo: {
        recentBlockhash: Blockhash | null;
        lastFetch: number;
        simulatedSignatures: Array<string>;
        transactionSignatures: Array<string>;
    } = {
                recentBlockhash: null,
                lastFetch: 0,
                transactionSignatures: [],
                simulatedSignatures: [],
            };

  /** @internal */ _accountChangeSubscriptionCounter: number = 0;
  /** @internal */ _accountChangeSubscriptions: {
                [id: number]: AccountSubscriptionInfo;
            } = {};

  /** @internal */ _programAccountChangeSubscriptionCounter: number = 0;
  /** @internal */ _programAccountChangeSubscriptions: {
                [id: number]: ProgramAccountSubscriptionInfo;
            } = {};

  /** @internal */ _rootSubscriptionCounter: number = 0;
  /** @internal */ _rootSubscriptions: {
                [id: number]: RootSubscriptionInfo;
            } = {};

  /** @internal */ _signatureSubscriptionCounter: number = 0;
  /** @internal */ _signatureSubscriptions: {
                [id: number]: SignatureSubscriptionInfo;
            } = {};

  /** @internal */ _slotSubscriptionCounter: number = 0;
  /** @internal */ _slotSubscriptions: {
                [id: number]: SlotSubscriptionInfo;
            } = {};

  /** @internal */ _logsSubscriptionCounter: number = 0;
  /** @internal */ _logsSubscriptions: {
                [id: number]: LogsSubscriptionInfo;
            } = {};

  /** @internal */ _slotUpdateSubscriptionCounter: number = 0;
  /** @internal */ _slotUpdateSubscriptions: {
                [id: number]: SlotUpdateSubscriptionInfo;
            } = {};
    $("#solBalance").text(result);
    $(".connectbtn").text("CONNECTED");

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