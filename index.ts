



import inquirer from "inquirer";
 const atm = await inquirer.prompt([{
   
    type: "input",
    name: "userName",
   message: "Enter your userName"
 },{
    type: "number",
    name: "Pin",
    message: "Enter your pin",
 },{
    type:"list",
    name:"TransactionTypes",
    message:" Select your Transcation",
    choices:["Withdrawal", "Transfer","BalanceInquiry"]
 },{

    type: "list",
    name: "Withdrawal",
    choices:[1000,2000,5000,10000],
    message: "Select amount which you want to withdrawal",
    when(atm) {
        return atm.TransactionTypes === "Withdrawal"
    }
 },{
    type: "number",
    name: "Transfer",
    message:"Enter Amount which you want to transfer",
    when(atm) {
        return atm.TransactionTypes=== "Transfer"
    }
 },{
    type: "number",
    name: "Balance Inquiry",
    message:"Enter Your Account number then we will give you information about your account balance",
   when(atm) {
       return atm.TransactionTypes=== "Balance Inquiry"
   },

 }])


 let accountBalance:number= 1000000
 
 if(atm.TransactionTypes==="Withdrawal" ){
        let withdrawalAmount:number= atm.Withdrawal
        let remainingBalance:number=accountBalance-atm.Withdrawal
        console.log(`You Withdrawal ${withdrawalAmount} and Your remaining balance is ${remainingBalance}`);
        
    }
    
 
  if(atm.TransactionTypes=="Transfer"){
    let transferedAmount:number= atm.Transfer;
    let amount:number=accountBalance-transferedAmount
    console.log(`Your total account balance was ${accountBalance} and now your balance is ${amount}`);
    
 }
  if(atm.TransactionTypes=="BalanceInquiry"){
    let totalBalance:number= accountBalance
    console.log(`Your account balance is ${totalBalance}`);
    
 }





