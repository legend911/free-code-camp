function drawer(price, cash, cid) {
  var change;
  var totalCID = 0;
  var changeArray = [];
  var temp;
  
  // calculate change
  change = cash - price;
  
  // calculate totalCID
  for (var i = 0; i < cid.length; i++) {
    totalCID += cid[i][1]; 
    totalCID = Math.round(totalCID * 100) / 100;
  }
  
  // Not enough cash
  if (change < 0) {
    console.log("Not enough cash");
    return 0;
  }
  
  // Insufficient funds for change
  else if (totalCID < change) {
    var lowMoney = "Insufficient Funds";
    return lowMoney;  
  }
  
  else if (totalCID == change) {
    var noMoney = "Closed";
    return noMoney;  
  }
  
  // return change
  // cid[8][1]
  else {
    if (change > 100.00) {
      temp = change;
      // if you have less dollars than required
      if (temp > cid[8][1] + 100) {
        var hundred = cid[8][1] / 100;
        hundred *= 100.00;
        change -= hundred;
        change = Math.round(change * 100) / 100;
      }
      else {
        hundred = temp / 100;
        hundred = Math.floor(hundred);
        change %= 100.00;
        change = Math.round(change * 100) / 100;
        hundred *= 100.00;
      }
      changeArray.push(["HUNDRED", hundred]);
    }
    // cid[7][1]
    // if you have less dollars than required
    if (change > 20.00) {
      temp = change;
      if (temp > cid[7][1] + 20) {
        var twenty = cid[7][1] / 20;
        twenty *= 20.00
        change -= twenty;
        change = Math.round(change * 100) / 100;
      }
      else {
        twenty = temp / 20;
        twenty = Math.floor(twenty);
        change %= 20.00;
        change = Math.round(change * 100) / 100;
        twenty *= 20.00;
      }
      changeArray.push(["TWENTY", twenty]);
    }
    // cid[6][1]
    // if you have less dollars than required
    if (change > 10.00) {
      temp = change;
      if (temp > cid[6][1] + 10) {
        var ten = cid[6][1] / 10;
        ten *= 10.00;
        change -= ten;
        change = Math.round(change * 100) / 100;
      }
      else {
        ten = temp / 10;
        ten = Math.floor(ten);
        change %= 10.00;
        change = Math.round(change * 100) / 100;
        ten *= 10.00;
      }
      changeArray.push(["TEN", ten]);
    }
    // cid[5][1]
    // if you have less dollars than required
    if (change > 5.00) {
      temp = change;
      if (temp > cid[5][1] + 5) {
        var five = cid[5][1] / 5;
        five *= 5.00;
        change -= five;
        change = Math.round(change * 100) / 100;
      
      }
      else {
        five = temp / 5;
        five = Math.floor(five);
        change %= 5.00;
        change = Math.round(change * 100) / 100;
        five *= 5.00;
      }
      changeArray.push(["FIVE", five]);
    }
    // cid[4][1]
    // if you have less dollars than required
    if (change > 1.00) {
      temp = change;
      if (temp > cid[4][1] + 1) {
        var one = cid[4][1] / 1;
        one *= 1.00;
        change -= one;
        change = Math.round(change * 100) / 100;
      }
      else {
        one = temp / 1;
        one = Math.floor(one);
        change %= 1.00;
        change = Math.round(change * 100) / 100;
        one *= 1.00;
      }
      changeArray.push(["ONE", one]);
    }
    // cid[3][1]
    // if you have less coins than required
    if (change > 0.25) {
      temp = change;
      if (temp > cid[3][1] + 0.25) {
        var quarter = cid[3][1] / 0.25;
        quarter *= 0.25;
        change -= quarter;
        change = Math.round(change * 100) / 100;
      }
      else {
        quarter = temp / 0.25;
        quarter = Math.floor(quarter);
        change %= 0.25;
        change = Math.round(change * 100) / 100;
        quarter *= 0.25;
      }
      changeArray.push(["QUARTER", quarter]);
    }
    // cid[2][1]
    // if you have less coins than required
    if (change > 0.10) {
      temp = change;
      if (temp > cid[2][1] + 0.10) {
        var dime = cid[2][1] / 0.10;
        dime *= 0.10;
        change -= dime;
        change = Math.round(change * 100) / 100;
        
      }
      else {
        dime = temp / 0.10;
        dime = Math.floor(dime);
        change %= 0.10;
        change = Math.round(change * 100) / 100;
        dime *= 0.10;
      }
      changeArray.push(["DIME", dime]);
    }
    // cid[1][1]
    // if you have less coins than required
    if (change > 0.05) {
      temp = change;
      if (temp > cid[1][1] + 0.05) {
        var nickel = cid[1][1] / 0.05;
        nickel *= 0.05;
        change -= nickel;
        change = Math.round(change * 100) / 100;
      }
      else {
        nickel = temp / 0.05;
        nickel = Math.floor(nickel);
        change %= 0.05;
        change = Math.round(change * 100) / 100;
        nickel *= 0.05;
      }
      changeArray.push(["NICKEL", nickel]);
    }
    // cid[0][1]
    // if you have less coins than required
    if (change > 0.01) {
      temp = change;
      if (temp > cid[0][1] + 0.01) {
        var penny = cid[0][1] / 0.01;
        penny *= 0.01;
        change -= penny;
        change = Math.round(change * 100) / 100;
        
      }
      else {
        penny = temp / 0.01;
        penny = Math.floor(penny);
        change %= 0.01;
        change = Math.round(change * 100) / 100;
        penny *= 0.01;
      }
      changeArray.push(["PENNY", penny]);
    }
  }
  
  // check to see if I don't have the right amount of dollars and coins
  if (change !== 0) {
    var broke = "Insufficient Funds";
    return broke;
  }
  
  // Here is your change, ma'am.
  return changeArray;
}

drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);