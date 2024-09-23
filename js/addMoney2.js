document.getElementById("addMoney").addEventListener("click",function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById("addMoneyInput");
    const pinNumber =getInputFieldValueById("pinNumberInput"); 

    if(pinNumber === 1234){
        const balance = getTextFieldValueById("accountBalance")
        const newBalance =  balance + addMoney;
        document.getElementById("accountBalance").innerText = newBalance;

        // add to transaction history

        const entry = document.createElement("p");
        entry.innerText = `Added: ${addMoney} Tk. Balance: ${newBalance}
         `;
        console.log(entry);
        
        document.getElementById("transaction_history").appendChild(entry)
    }
    else{
        alert("failed to add money")
    }
    
    
})


