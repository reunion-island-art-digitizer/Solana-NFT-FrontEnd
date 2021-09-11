$(".connectbtn").on("click", function() {
    window.web3 = new Web3(window.web3.currentProvider);
    window.ethereum.enable();
    return true;
})