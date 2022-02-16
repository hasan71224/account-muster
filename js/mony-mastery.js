function extractData(inputData){
    const input = document.getElementById(inputData);
    const inputValue = input.value;
    return parseFloat(inputValue);
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
    const totalExpensesAmount = expenceForFood + expenceForRent + expenceForClothes + previousTotalExpenses;
    totalExpenses.innerText = totalExpensesAmount;

    //update balance
    const totalBalance = document.getElementById("balance");
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);

    // total balance show
    const totalBalanceAmount = (previousTotalBalance + totalIncome) - totalExpensesAmount;
    totalBalance.innerText = totalBalanceAmount;

    // input value clear
    income.value = "";
    food.value = "";
    rent.value = "";
    clothes.value = "";

})