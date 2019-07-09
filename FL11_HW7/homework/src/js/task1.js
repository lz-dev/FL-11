const usermail = 'user@gmail.com';
const adminmail = 'admin@gmail.com';
const minPasswordLen = 5;
const minEmailLen = 6;
let correctmail = false;
let correctpass = false;
let realpass = 'UserPass';
let email = prompt('Enter email : ', '');

if (email === '' || email === null ) {
   alert('Canceled.');
} else if (email.length < minEmailLen) {
   alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email === usermail) {
  correctmail = true;
} else if (email === adminmail) {
  correctmail = true;
  realpass = 'AdminPass';
} else {
  alert('I don\'t know you');
}

if (correctmail) {

 let password = prompt('Enter password: ', '');
 if (password === '' || password === null ) {
   alert('Canceled.');
 } else if (password === realpass) {
    correctpass = true;
 } else {
   alert('Wrong password');
 }

 if (correctpass) {
  let wantchange = confirm('Do you want to change password ?');
  if (wantchange) {
     let correctoldpass = false;
     let oldpassword = prompt('Enter old password: ', '');
     if (oldpassword === '' || oldpassword === null ) {
       alert('Canceled.');
     } else if (oldpassword === realpass) {
        correctoldpass = true;
     } else {
       alert('Wrong password');
     }
     
     if (correctoldpass) {
        let newpassword = prompt('Enter new password: ', '');
        if (newpassword.length >= minPasswordLen) {
            let confirmpassword = prompt('Confirm new password: ', '');
            if (confirmpassword === newpassword) {
               alert('You have successfully changed your password.');
             } else {
               alert('You wrote the wrong password.');
             }
         } else {
            alert('It\'s too short password. Sorry.');
         } 
     }
  } else {
   alert('You have failed the change.');
  }
 }
}





