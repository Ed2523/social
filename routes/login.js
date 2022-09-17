import { onNavigate } from '../main.js';

export const login = () => {

  const mainLogin = document.createElement('main');
  mainLogin.classList.add("login-main")

  const sectionLogin = document.createElement('section')
  sectionLogin.classList.add('section_login')

  const divloginButtons = document.createElement('div')
  divloginButtons.classList.add('register-buttons-div')

  const sectionInputs = document.createElement('section')

  const sectionLinesHr = document.createElement('section')
  sectionLinesHr.classList.add('sectionLinesHr')

  const animalPawnet = document.createElement('h2')
  animalPawnet.classList.add('animalPawnet')
  animalPawnet.textContent = 'Animal Pawnet'

  const inputEmail = document.createElement('input')
  inputEmail.classList.add('inputs')

  const email = document.createElement('p')
  email.textContent = 'Email'

  const inputPassWord = document.createElement('input')
  inputPassWord.classList.add('inputs')

  const pasword = document.createElement('p')
  pasword.textContent = 'Pasword'

  const buttonLogin = document.createElement('button')
  buttonLogin.setAttribute('id', 'log-in')
  buttonLogin.classList.add('login-button')
  buttonLogin.textContent = 'Inicia sesión'

  const hrLeft = document.createElement('hr')
  hrLeft.classList.add('hrSecLog')

  const leterSec = document.createElement('p')
  leterSec.classList.add('pLetSec')
  leterSec.textContent = 'O'; // no aparece aiudaaa

  const hrRight = document.createElement('hr')
  hrRight.classList.add('hrSecLog')

  const buttonRegister = document.createElement('button')
  buttonRegister.textContent = 'Registrate'
  buttonRegister.setAttribute('id', 'register')
  buttonRegister.classList.add('register-button')

  const textRegister = document.createElement('p')
  textRegister.classList.add('textRegister')
  textRegister.textContent = '¿No tienes cuenta?'

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register'); // falta el archivo de registro
  });

  
  sectionInputs.append(animalPawnet, inputEmail, email, inputPassWord, pasword);

  sectionLinesHr.append(hrLeft, leterSec, hrRight);

  divloginButtons.append(buttonLogin, buttonRegister, textRegister);

  sectionLogin.append(sectionInputs, sectionLinesHr, divloginButtons);

  mainLogin.append(sectionLogin);

  return mainLogin;
};