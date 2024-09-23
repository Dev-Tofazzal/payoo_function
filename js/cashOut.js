document.getElementById("cashOutMoney").addEventListener("click",function(event){
    event.preventDefault();

    const cashOutMoney = getInputFieldValueById("cashOutMoneyInput");
    const pinCashOut = getInputFieldValueById("cashOutPin");
    
    if(pinCashOut === 1234){
       const balance = getTextFieldValueById("accountBalance");
       const newBalance = balance - cashOutMoney;
       document.getElementById("accountBalance").innerText = newBalance; 

       const div = document.createElement("div");
       div.cl
    }
    else{
        alert("please enter right pin number")
    }
    
})