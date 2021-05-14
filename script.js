
const nav =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('#'+burger.dataset.target);

    burger.addEventListener('click', function(){
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
};
nav()

 user = {
    email:'liam@23com',
    password:'liam',
    myFunc(email=user.email,password=user.password) {
       
    }
}
// display text when email = wrong
const createAlertEm = () =>{
   const alertTextEm = document.querySelector('.alertTextEm');
   alertTextEm.style.display = 'block';
    
};
// display text when password = wrong
const createAlertP = () =>{
    const alertTextP = document.querySelector('.alertTextP');
    alertTextP.style.display = 'block';
 }

 const createAlertBoth = () =>{
     const alertTextBoth = document.querySelector('.alertTextBoth');
     alertTextBoth.style.display = 'block';
 }

 //refresh page after incorrect submit to remove warning text
 const refresh = () => { document.querySelector('#signIn').addEventListener('click', function(){
    window.location.reload();
 }) };

 const formVal = (e) => {
   const email = document.forms['signInForm']['emailAd']
   const password = document.forms['signInForm']['passVal']

   if (email.value !== user.email && password.value !== user.password) {
       e.preventDefault();
       createAlertBoth();
       refresh()
   } 
   else if(email.value !== user.email && password.value === user.password){
       e.preventDefault();
       createAlertEm();
       refresh()
   }
   else if(email.value === user.email && password.value !== user.password){
       e.preventDefault();
       createAlertP();
       refresh()
   }
 }
 document.querySelector('#signIn').addEventListener('submit', formVal)

 // flip card to make register form appear
 const card = document.querySelector('.card');
 
 const flipCard = () => {
     card.classList.toggle("flip");
 }

document.querySelector('#registerBtn').addEventListener("click", flipCard);
document.querySelector('#backBtn').addEventListener('click', flipCard)
// register form