
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

 const formVal = (e) => {
   const email = document.forms['myForm']['emailAd']
   const password = document.forms['myForm']['passVal']

   if (email.value !== user.email && password.value !== user.password) {
       e.preventDefault();
       createAlertBoth();
   } 
   else if(email.value !== user.email && password.value === user.password){
       e.preventDefault();
       createAlertEm();
   }
   else if(email.value === user.email && password.value !== user.password){
       e.preventDefault();
       createAlertP();
   }
 }
 document.querySelector('form').addEventListener('submit', formVal)
//user.myFunc()