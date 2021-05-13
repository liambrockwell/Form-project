
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
const emailFail = () =>  {
    const email = document.forms['myForm']['emailAd'];
    email.classList.add('me');
    email.value = 'We do not recognise this email';
    
    if(email.value ='We do not recognise this email' ){
    email.addEventListener('click',function(){
      document.forms['myForm'].reset();
    })};
    
}

 const formVal = (e) => {
   const email = document.forms['myForm']['emailAd']
   const password = document.forms['myForm']['passVal']

   if (email.value !== user.email && password.value !== user.password) {
       e.preventDefault()
       emailFail()
   } 
   else if(email.value !== user.email && password.value === user.password){
       e.preventDefault()
       emailFail()
   }
   else if(email.value === user.email && password.value !== user.password){
    e.preventDefault()
    alert('correct email wrong password')
   }
 }
 document.querySelector('form').addEventListener('submit', formVal)
//user.myFunc()