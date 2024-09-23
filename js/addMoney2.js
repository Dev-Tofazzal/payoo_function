document.getElementById("addMoney").addEventListener("click",function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById("addMoneyInput");
    const pinNumber =getInputFieldValueById("pinNumberInput"); 

    if(pinNumber === 1234){
        const balance = getTextFieldValueById("accountBalance")
        const newBalance =  balance + addMoney;
        document.getElementById("accountBalance").innerText = newBalance;
        
    }
    else{
        alert("failed to add money")
    }
    
    
})