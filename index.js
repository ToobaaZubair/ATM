// import inquirer from "inquirer";
// const atmMachine = await inquirer.prompt([{
//     type: "input",
//     name: "userName",
//     message: "Enter Your UserName"
// }, {
//     type: "input",
//     name: "UserPin",
//     message: "Enter Your Pin:"
// },{
//     type: "list",
//     name: "transactionsType",
//     message: "Which Transaction Do You Want ",
//     choices: ["CashWithdrawl", "TransferAmount", "BalanceInquiry"]
// }])
// const transactions = await inquirer.prompt([{ 
//     type: "list",
//     name: "CashWithdrawal",
//     choices: [1000, 2000, 5000, 10000, 20000],
//     message: "Select the Amount",
//     // when(transactions) {
//     //     return transactions == "CashWithdrawl"
//     // },
// }, {
//     type: "number",
//     name: "TransferAmount",
//     message: "Enter amount which you want to transfer",
//     // when(transactions) {
//     //     return transactions == "TransferAmount"
//     // }
// }, {
//     type: "number",
//     name: "AcountNumber",
//     message: "Enter the account number where you want to transfer the amount",
//     // when(transactions) {
//     //     return transactions == "TransferAmount"
//     // },
// }, {
//     type: "number",
//     name: "BalanceInquiry",
//     message: "Enter Your Account Number then we give informations about your Account Balance",
// //     when(transactions) {
// //         return transactions == "BalanceInquiry"
// //     },
// // }
// }])
// const Balance: number = 100000;
// if ( transactions ==  "CashWithdrawal") {
//     console.log("yes");
//     if(Balance > transactions.CashWithdrawal){
//     const remainingBalance = Balance - transactions.CashWithdrawal
//     console.log(`You Withdraw ${transactions.CashWithdrawal} and Your Remaining balance is ${remainingBalance}`);}
//     else {
//         console.log(`Insufficient Balance`);
// }
// }
// if (transactions == "TransferAmount") {
//     const transferedAmount = Balance - transactions.TransferAmount
//     console.log(`Your Total Balance was ${Balance} and you transfered ${transactions.TransferAmount} to account number ${transactions.AcountNumber}`);
// }
// if (transactions == "BalanceInquiry") {
//     console.log(`Your Total Balance is ${Balance}`);
// }
import inquirer from "inquirer";
const atm = await inquirer.prompt([{
        type: "input",
        name: "userName",
        message: "Enter your userName"
    }, {
        type: "number",
        name: "Pin",
        message: "Enter your pin",
    }, {
        type: "list",
        name: "TransactionTypes",
        message: " Select your Transcation",
        choices: ["Withdrawal", "Transfer", "BalanceInquiry"]
    }, {
        type: "list",
        name: "Withdrawal",
        choices: [1000, 2000, 5000, 10000],
        message: "Select amount which you want to withdrawal",
        when(atm) {
            return atm.TransactionTypes === "Withdrawal";
        }
    }, {
        type: "number",
        name: "Transfer",
        message: "Enter Amount which you want to transfer",
        when(atm) {
            return atm.TransactionTypes === "Transfer";
        }
    }, {
        type: "number",
        name: "Balance Inquiry",
        message: "Enter Your Account number then we will give you information about your account balance",
        when(atm) {
            return atm.TransactionTypes === "Balance Inquiry";
        },
    }]);
let accountBalance = 1000000;
if (atm.TransactionTypes === "Withdrawal") {
    let withdrawalAmount = atm.Withdrawal;
    let remainingBalance = accountBalance - atm.Withdrawal;
    console.log(`You Withdrawal ${withdrawalAmount} and Your remaining balance is ${remainingBalance}`);
}
if (atm.TransactionTypes == "Transfer") {
    let transferedAmount = atm.Transfer;
    let amount = accountBalance - transferedAmount;
    console.log(`Your total account balance was ${accountBalance} and now your balance is ${amount}`);
}
if (atm.TransactionTypes == "BalanceInquiry") {
    let totalBalance = accountBalance;
    console.log(`Your account balance is ${totalBalance}`);
}
