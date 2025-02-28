var calculateTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Test data
var bills = [275, 40, 430];

bills.forEach(function(bill) {
    var tip = calculateTip(bill);
    var total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
});