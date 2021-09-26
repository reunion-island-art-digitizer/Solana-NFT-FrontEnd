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
  * Establish a JSON RPC connection
  *
  * @param endpoint URL to the fullnode JSON RPC endpoint
  * @param commitmentOrConfig optional default commitment level or optional ConnectionConfig configuration object
  */
    constructor(
        endpoint: string,
        commitmentOrConfig ?: Commitment | ConnectionConfig,
    ) {
        let url = new URL(endpoint);
        const useHttps = url.protocol === 'https:';

        let wsEndpoint;
        let httpHeaders;
        let fetchMiddleware;
        let disableRetryOnRateLimit;
        if (commitmentOrConfig && typeof commitmentOrConfig === 'string') {
            this._commitment = commitmentOrConfig;
        } else if (commitmentOrConfig) {
            this._commitment = commitmentOrConfig.commitment;
            this._confirmTransactionInitialTimeout =
                commitmentOrConfig.confirmTransactionInitialTimeout;
            wsEndpoint = commitmentOrConfig.wsEndpoint;
            httpHeaders = commitmentOrConfig.httpHeaders;
            fetchMiddleware = commitmentOrConfig.fetchMiddleware;
            disableRetryOnRateLimit = commitmentOrConfig.disableRetryOnRateLimit;
        }

        this._rpcEndpoint = endpoint;
        this._rpcWsEndpoint = wsEndpoint || makeWebsocketUrl(endpoint);

        this._rpcClient = createRpcClient(
            url.toString(),
            useHttps,
            httpHeaders,
            fetchMiddleware,
            disableRetryOnRateLimit,
        );
        this._rpcRequest = createRpcRequest(this._rpcClient);
        this._rpcBatchRequest = createRpcBatchRequest(this._rpcClient);

        this._rpcWebSocket = new RpcWebSocketClient(this._rpcWsEndpoint, {
            autoconnect: false,
            max_reconnects: Infinity,
        });
        this._rpcWebSocket.on('open', this._wsOnOpen.bind(this));
        this._rpcWebSocket.on('error', this._wsOnError.bind(this));
        this._rpcWebSocket.on('close', this._wsOnClose.bind(this));
        this._rpcWebSocket.on(
            'accountNotification',
            this._wsOnAccountNotification.bind(this),
        );
        this._rpcWebSocket.on(
            'programNotification',
            this._wsOnProgramAccountNotification.bind(this),
        );
        this._rpcWebSocket.on(
            'slotNotification',
            this._wsOnSlotNotification.bind(this),
        );
        this._rpcWebSocket.on(
            'slotsUpdatesNotification',
            this._wsOnSlotUpdatesNotification.bind(this),
        );
        this._rpcWebSocket.on(
            'signatureNotification',
            this._wsOnSignatureNotification.bind(this),
        );
        this._rpcWebSocket.on(
            'rootNotification',
            this._wsOnRootNotification.bind(this),
        );
        this._rpcWebSocket.on(
            'logsNotification',
            this._wsOnLogsNotification.bind(this),
        );
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