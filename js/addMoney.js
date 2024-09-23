

document.getElementById("addMoney").addEventListener("click", function (event) {
    event.preventDefault();

    
    // console.log("add money clicked");
    
    // const addMoney = inputFieldValueById();
    const addMoney = getInputFieldValueById("addMoneyInput");
    const pinNumber = getInputFieldValueById("pinNumberInput");
    console.log(addMoney,pinNumber);
    
});