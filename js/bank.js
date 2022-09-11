//   step--1 
 document.getElementById('btn-Deposit').addEventListener('click', function () {
      
     // step---2
     const input = document.getElementById('input-deposit');
     const inputFill = input.value;
     const newdepositTotal = parseFloat(inputFill);
      //step---7 
      input.value = '';

      //step---2.5 
     if (isNaN(newdepositTotal)) {
          alert('used to Only Number pleace try agen');
          return;
      }
     //  step--3
     const depositElement = document.getElementById('moneydeposit');
     const depositsring = depositElement.innerText;
     const prevdeposittotal = parseFloat(depositsring);
     // step---4
     const totalAmountDeposit = prevdeposittotal + newdepositTotal;
      depositElement.innerText = totalAmountDeposit;
      
     //  step--5
     const moneyBalance = document.getElementById('moneyBalance');
     const totalmeny = moneyBalance.innerText;
     // step--6
     const totalBalenc = parseFloat(totalmeny);
     const totalmoneybalance = totalBalenc + newdepositTotal;
     moneyBalance.innerText = totalmoneybalance;
   
})