    
// step--1
document.getElementById('btn-WithDraw').addEventListener('click', function () {
// step---2
     const withdraw = document.getElementById('input-withdraw');
     const withdrawsring = withdraw.value;
     const newtotalwithdraw = parseFloat(withdrawsring);
// step----2.5
     withdraw.value = '';
// step---2.5
     if (isNaN(newtotalwithdraw)) {
          alert('used to Only Number pleace try agen');
          return;
     }
// step 3
     const withdrawElement = document.getElementById('moneyWithDraw');
     const withdarwtotal = withdrawElement.innerText;
     const prevtotalWithdraw = parseFloat(withdarwtotal);
// step--5
     const totalBalenc = document.getElementById('moneyBalance');
     const totalMoneyBalenc = totalBalenc.innerText;
     const totalMyAmountBalance = parseFloat(totalMoneyBalenc);
  
// step--5.5
     if (newtotalwithdraw > totalMyAmountBalance) {
          alert('baap bank ato taka nai');
          return;
     }
// step--4
     const totalWithdarwAmount = newtotalwithdraw + prevtotalWithdraw;
     withdrawElement.innerText = totalWithdarwAmount;
// step---6
     const totalmoneyamonutbalance = totalMyAmountBalance - newtotalwithdraw;
     totalBalenc.innerText = totalmoneyamonutbalance;




})