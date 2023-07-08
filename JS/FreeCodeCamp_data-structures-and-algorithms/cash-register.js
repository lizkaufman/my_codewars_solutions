/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
  //Everything in cents to stop JS floating point issues
  price *= 100;
  cash *= 100;
  cid = cid.map((arr) => [arr[0], arr[1] * 100]);

  //Early return if there will never be enough change to give
  const changeDue = cash - price;
  const totalChangeAvailable = cid.reduce((acc, cur) => acc + cur[1], 0);

  if (changeDue > totalChangeAvailable) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  //All cid and closed drawer if change is exact amount
  if (changeDue === totalChangeAvailable) {
    return {
      status: "CLOSED",
      change: cid.map((currencyType) => [
        currencyType[0],
        currencyType[1] / 100,
      ]),
    };
  }

  let changeToAllocate = changeDue;
  const currencyReference = [
    { type: "ONE HUNDRED", amount: 10000 },
    { type: "TWENTY", amount: 2000 },
    { type: "TEN", amount: 1000 },
    { type: "FIVE", amount: 500 },
    { type: "ONE", amount: 100 },
    { type: "QUARTER", amount: 25 },
    { type: "DIME", amount: 10 },
    { type: "NICKEL", amount: 5 },
    { type: "PENNY", amount: 1 },
  ];

  const change = currencyReference.reduce((changeArray, currencyType) => {
    //check if we even need this currency type; if not, skip it
    if (changeToAllocate < currencyType.amount) {
      return changeArray;
    }

    //find how many of that currency type available in the drawer
    const available = cid.find((type) => type[0] === currencyType.type);

    //if there's more than enough of that currency type
    //then subtract the total of that currency from the change still left to allocate
    //and add the correct amount of that currency to the change array
    if (available[1] >= changeToAllocate) {
      const quantity = Math.floor(changeToAllocate / currencyType.amount);
      changeToAllocate -= quantity * currencyType.amount;
      return [
        ...changeArray,
        [currencyType.type, (quantity * currencyType.amount) / 100],
      ];
    } else if (available[1] > 0) {
      //if there's not enough of the currency type, but more than none
      //then subtract the total of that currency from the change still left to allocate
      //and add all of that currency type to the change array
      changeToAllocate -= available[1];
      return [...changeArray, [available[0], available[1] / 100]];
    }
    return changeArray;
  }, []);

  return changeToAllocate === 0
    ? { status: "OPEN", change }
    : { status: "INSUFFICIENT_FUNDS", change: [] };
}
