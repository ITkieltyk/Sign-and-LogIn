// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');

const alfabetString =
  'abcdefghijklmnoprstuvwz0123456789ABCDEFGHIJKLŁMNOPRSTUVWZ';
const alfabet = alfabetString.split('');

let haslo1 = 'abcd';
let users = [];

function passHash(pass) {
  const passwordInput = pass.split('');

  const passwordHashed = [];
  for (let i = 0; i < passwordInput.length; i++) {
    const passLetterInx = alfabet.findIndex(
      (passLetter) => passLetter === passwordInput[i]
    );
    passwordHashed.push(alfabet[((alfabet.length % passLetterInx) + 1) * 2]);
  }
  return passwordHashed.join('');
}

function passCheck(pass, passHashed) {
  const passwordInput = pass.split('');

  const passwordHashed = [];
  for (let i = 0; i < passwordInput.length; i++) {
    const passLetterInx = alfabet.findIndex(
      (passLetter) => passLetter === passwordInput[i]
    );
    passwordHashed.push(alfabet[((alfabet.length % passLetterInx) + 1) * 2]);
  }
  return passwordHashed.join('') === passHashed;
}

document.getElementById('signIn').addEventListener('click', function (event) {
  // event.preventDefault();

  const userName = document.forms[0].elements[0].value;
  const userSurname = document.forms[0].elements[1].value;
  const userLogin = document.forms[0].elements[2].value;
  const userPass = document.forms[0].elements[3].value;

  for (let i = 0; i < document.forms[0].length - 1; i++) {
    document.forms[0].elements[i].value = '';
  }

  const userPassHashed = passHash(userPass);

  const user = {
    name: userName,
    surname: userSurname,
    login: userLogin,
    passHashed: userPassHashed,
  };

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
