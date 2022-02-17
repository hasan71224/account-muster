//globaly declear 
var totalBalanceAmount;
var totalExpensesAmount;

//common function
function extractData(inputData){
    const input = document.getElementById(inputData);
    const inputValue = input.value;
    const findValue = parseFloat(inputValue);
    
    if(isNaN(findValue)){
        window.alert("Only number is alow");
    }
    else if(findValue < 0){
        window.alert("negative value not acceptable");
    }
    else{
        return findValue;
    }
}
document.getElementById("deposit-calculate").addEventListener("click",function(){
    // console.log(extractData("income"));
    //calculation for total income
    /*
    const income = document.getElementById("income");
    const totalIncomeText = income.value;
    const totalIncome = parseFloat(totalIncomeText);
    */
    const totalIncome=extractData("income");

    //calculation for total expence
    //food
    /*
    const food = document.getElementById("food");
    const expenceForFoodText = food.value;
    const expenceForFood = parseFloat(expenceForFoodText);
    */
    const expenceForFood=extractData("food");
    //rent
    /*
    const rent = document.getElementById("rent");
    const expenceForRentText = rent.value;
    const expenceForRent = parseFloat(expenceForRentText);
    */
    const expenceForRent=extractData("rent");
    //clothes
    /*
    const clothes = document.getElementById("clothes");
    const expenceForClothesText = clothes.value;
    const expenceForClothes = parseFloat(expenceForClothesText);
    */
    const expenceForClothes=extractData("clothes");

    // update total expance
    const totalExpenses = document.getElementById("total-expenses");
    const totalExpensesText = totalExpenses.innerText;
    const previousTotalExpenses = parseFloat(totalExpensesText);

    // total Expenses Amount show
    totalExpensesAmount = expenceForFood + expenceForRent + expenceForClothes + previousTotalExpenses;
    totalExpenses.innerText = totalExpensesAmount;

    //update balance
    const totalBalance = document.getElementById("balance");
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);

    // total balance show
    totalBalanceAmount = (previousTotalBalance + totalIncome) - totalExpensesAmount;
    totalBalance.innerText = totalBalanceAmount;

    // input value clear
    income.value = "";
    food.value = "";
    rent.value = "";
    clothes.value = "";


})

// function for savings
document.getElementById("save-button").addEventListener("click", function(){
    const savings = document.getElementById("save");
    const savingsPersentText = savings.value;
    const savingsPersent = parseFloat(savingsPersentText);

    //update savings balance
    const totalSavings = document.getElementById("saving-amount");
    const totalSavingsText = totalSavings.innerText;
    const previousTotalSavings = parseFloat(totalSavingsText);

    //total savings show
    const totalSave = savingsPersent + previousTotalSavings;
    // console.log(totalSave);
    const successMassage = document.getElementById("notify-success");
    const failError = document.getElementById("notify-fail");
    //check savings and get notification
    if(totalBalanceAmount<totalExpensesAmount || totalBalanceAmount !=-1){
        failError.style.display = "block";
        successMassage.style.display = "none";
    }
    else{
        const totalSavingsAmount = (totalBalanceAmount * totalSave) / 100;
        // show in savings amount
        totalSavings.innerText = totalSavingsAmount;
        failError.style.display = "none";
        successMassage.style.display = "block";
    }
    // save input value clear
    save.value = "";
})