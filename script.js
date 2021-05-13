
const nav =() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('#'+burger.dataset.target);

    burger.addEventListener('click', function(){
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
};
nav()

document.querySelector('form').addEventListener('submit', function(e){
e.preventDefault()
})



 user = {
    email:'liam@23com',
    password:'liam',
    myFunc(email=user.email,password=user.password) {
       
    }
}


 const formVal = () => {
   const email = document.forms['myForm']['emailAd'].value
   const password = document.forms['myForm']['passVal'].value

   if (email === user.email && password === user.password) {
       console.log('well done')
       return true;
   } else{
       console.log('fail')
       return false;
   }
 }
 document.querySelector('form').addEventListener('submit', formVal)
//user.myFunc()