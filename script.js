// nav functionality
const nav =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('#'+burger.dataset.target);

    burger.addEventListener('click', function(){
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
};
nav()
//fake user data for tests
 user = {
    email:'liam@23com',
    password:'liam',
    
}
//1st form /log in functionality

// display text when email = wrong
const createAlertEm = () =>{
   const alertTextEm = document.querySelector('.alertTextEm');
   alertTextEm.style.display = 'block';
    
};
// display text when password = wrong
const createAlertP = () =>{
    const alertTextP = document.querySelector('.alertTextP');
    alertTextP.style.display = 'block';
 };

 const createAlertBoth = () =>{
     const alertTextBoth = document.querySelector('.alertTextBoth');
     alertTextBoth.style.display = 'block';
 };

 //refresh page after incorrect submit to remove warning text
 const refresh = () => { document.querySelector('#signIn').addEventListener('click', function(){
    window.location.reload();
 }) };

 const formVal = (e) => {
   const email = document.forms['signInForm']['emailAd'];
   const password = document.forms['signInForm']['passVal'];

   if (email.value !== user.email && password.value !== user.password) {
       e.preventDefault();
       createAlertBoth();
       refresh();
   } 
   else if(email.value !== user.email && password.value === user.password){
       e.preventDefault();
       createAlertEm();
       refresh();
   }
   else if(email.value === user.email && password.value !== user.password){
       e.preventDefault();
       createAlertP();
       refresh();
   };
 };
 document.querySelector('#signIn').addEventListener('submit', formVal);

 // flip card functionality 
 const card = document.querySelector('.card');
 
 const flipCard = () => {
     card.classList.toggle("flip");
   
 };

document.querySelector('#registerBtn').addEventListener("click", flipCard);
document.querySelector('#backBtn').addEventListener('click', flipCard);

// register form

// creating a func that recognises if there are any numbers or symbols in name input.
const char = (name) => {
    const charReq = /[A-z]/;
    name.addEventListener("keypress", event => {
        if(!charReq.test(event.key)) {
            event.preventDefault();
        };
    });
};

const firstNameFunc = () => {
  const firstName = document.querySelector('#firstName');
  char(firstName);
};
const lastNameFunc = () => {
  const lastName = document.querySelector('#lastName');
  char(lastName);
  
};



document.querySelector('#firstName').addEventListener('keydown',firstNameFunc);
document.querySelector('#lastName').addEventListener('keydown',lastNameFunc);

// a way to recognise created password and confirm it
const passVal = (e) => { 
    const createPass = document.querySelector('#createPass').value;
    const confirmPass = document.querySelector('#confirmPass').value;
    const errorText = document.querySelector('.help')
    //adding error text upon incorrect password
    if(createPass != confirmPass){
        errorText.classList.add('add');
        e.preventDefault()
    } else if(createPass ==''){
       e.preventDefault()
    } else if(confirmPass ==''){
       e.preventDefault()
    }
     else{
        errorText.classList.remove('add');
    }

     };

document.querySelector('#register').addEventListener('submit', passVal);




