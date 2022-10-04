var initialPriceHTML = document.querySelector("#input-initial-price");
var quantityHTML = document.querySelector("#input-quantity");
var currentPriceHTML = document.querySelector("#input-current-price");
console.log(currentPriceHTML)
var btnCalculate = document.querySelector(".btn-calculate");
var output = document.querySelector(".output");

function calcualteStockProfitOrLoss() {
    var initialPrice = initialPriceHTML.value;
    var quantity = quantityHTML.value;
    var currentPrice = currentPriceHTML.value;
    var msg;

    if(initialPrice <= currentPrice) {
        //profit
        var profit = calculateProfit(initialPrice, quantity, currentPrice);
        var profitPercentage = calculateProfitPercentage(initialPrice, profit, quantity);
        msg = "your profit is " + profit + " and profit percentage is " + profitPercentage + "%";
    }
    else {
        //loss
        var loss = calculateLoss(initialPrice, quantity, currentPrice);
        var lossPercentage = calculateLossPercentage(initialPrice, loss, quantity);
        msg = "your loss is " + loss + " and loss percentage is " + lossPercentage + "%";
    }

    output.innerText = msg;
}

function calculateProfit(initialPrice, quantity, currentPrice) {
    var profit = currentPrice - initialPrice;
    var totalProfit = profit * quantity;
    return totalProfit;
}

function calculateProfitPercentage(initialPrice, profit, quantity) {
    return (profit / initialPrice) / quantity * 100;
}

function calculateLoss(initialPrice, quantity, currentPrice) {
    var loss = initialPrice - currentPrice;
    var totalLoss = loss * quantity;
    return totalLoss;
}

function calculateLossPercentage(initialPrice, loss, quantity) {
    return (loss / initialPrice) / quantity * 100;
}

btnCalculate.addEventListener("click", calcualteStockProfitOrLoss);