// =================================================================
    // step--1
     document.getElementById('submit-btn').addEventListener('click', function () {
     // step--2
     const userEmail = document.getElementById('user-email');
     const email = userEmail.value;
   
     // step--3
     const userPassword = document.getElementById('user-password');
     const password = userPassword.value;
   
     // step---4
     if (email === 'sontan@baap.com' && password ==='secret') {
          window.location.href = 'bank.html';
     } else {
          alert('please your worran imformation');
     }
     // step--5
     userEmail.value = '';
     userPassword.value = '';
})