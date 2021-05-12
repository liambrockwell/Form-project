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
   }
 }
 document.querySelector('form').addEventListener('submit', formVal)
//user.myFunc()