/*
class Account {
  constructor(name,balance) {
  this.name = name 
  this.balance = balance
  }
deposit(amount) {
  this.balance = amount + this.balance
    return this.balance 
  }
checkAccount() {
  return this
}
withdrawl(amount) {
  return this.balance - amount
  }
}
let account1 = new Account('Adolfo',1000)
console.log(account1);

let account2 = new Account('Lance',2000)
console.log(account1.deposit(1000));
console.log(account2.checkAccount())
console.log(account1.withdrawl(1000));
*/

class Launder {
  constructor(account1Name,account2Name) {
    this.account1 = {
      name:account1Name,
      balance:0
    };
    this.account2 = {
      name:account2Name,
      balance:0
    };
  }
  ac1Receives(amount) {
    this.account1.balance = amount + this.account1.balance
      return this.account1
  }
  ac2Receives(amount) {
    this.account2.balance = amount + this.account2.balance
      return this.account2
  }
  ac1TransfersAc2(amount) {
    this.account1.balance = this.account1.balance - amount
    this.account2.balance = amount + this.account2.balance
      return this 
  }
}
let laundering = new Launder('Adolfo','Natalie')
console.log(laundering);
console.log(laundering.ac1Receives(1000));
console.log(laundering.ac2Receives(2000));
console.log(laundering.ac1TransfersAc2(500))



