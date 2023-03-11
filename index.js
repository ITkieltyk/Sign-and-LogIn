// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
const alfabetString =
  'abcdefghijklmnoprstuvwz0123456789ABCDEFGHIJKLŁMNOPRSTUVWZ';
const alfabet = alfabetString.split('');

let haslo1 = 'abcd';
let users = [];

function passHash(pass) {
  const passwordInput = pass.split('');
  console.log(passwordInput);
  // console.log(passwordInput.length);
  const passwordHashed = [];
  for (let i = 0; i < passwordInput.length; i++) {
    // console.log(passwordInput[i]);
    const passLetterInx = alfabet.findIndex(
      (passLetter) => passLetter === passwordInput[i]
    );
    passLetterInx > alfabet.length
      ? passwordHashed.push(alfabet[(passLetterInx - alfabet.length + 1) * 2])
      : passwordHashed.push(alfabet[(passLetterInx + 1) * 2]);
    // passwordHashed.push(alfabet[passLetterInx * 2]);
    // console.log(passLetterInx);
  }
  return passwordHashed.join('');
}

function passCheck(pass, passHashed) {
  const passwordInput = pass.split('');
  // console.log(passwordInput);
  // console.log(passwordInput.length);
  const passwordHashed = [];
  for (let i = 0; i < passwordInput.length; i++) {
    // console.log(passwordInput[i]);
    const passLetterInx = alfabet.findIndex(
      (passLetter) => passLetter === passwordInput[i]
    );
    passLetterInx > alfabet.length
      ? passwordHashed.push(alfabet[(passLetterInx - alfabet.length + 1) * 2])
      : passwordHashed.push(alfabet[(passLetterInx + 1) * 2]);
    // passwordHashed.push(alfabet[passLetterInx * 2]);
    // console.log(passLetterInx);
  }
  return passwordHashed.join('') === passHashed;
}
let passHashed = passHash(haslo1);
// const haslo = prompt('podaj hasło');
console.log(passHashed);

console.log(passCheck(haslo1, passHashed));

// function addUser (event) {
//   event.preventDefault();

//   const userName = document.forms[1][1].value;
//   console.log(userName);
// }

document.getElementById('signIn').addEventListener('click', function (event) {
  event.preventDefault();

  const userName = document.forms[0].elements[0].value;
  const userSurname = document.forms[0].elements[1].value;
  const userLogin = document.forms[0].elements[2].value;
  const userPass = document.forms[0].elements[3].value;

  const userPassHashed = passHash(userPass);

  const user = {
    name: userName,
    surname: userSurname,
    login: userLogin,
    passHashed: userPassHashed,
  };

  console.log(user);
  users.push(user);
  console.log(users);
});

function loginCheck(userlogin, userPass) {
  const userInx = users.findIndex((el) => el.login === userlogin);
  if (userInx === -1) {
    document.getElementById('loginStatus').innerHTML =
      '<h1>User does not exist, please use correct user login</h1>';
  } else if (passCheck(userPass, users[userInx].passHashed) === false) {
    document.getElementById('loginStatus').innerHTML =
      '<h1>Password incorrect! Use correct password!</h1>';
  } else {
    document.getElementById('loginStatus').innerHTML =
      '<h1>User logged in!</h1>';
  }
}
document.getElementById('loginBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const login = document.forms[1].elements[0].value;
  console.log(login);
  const pass = document.forms[1].elements[1].value;
  console.log(pass);
  loginCheck(login, pass);
});
