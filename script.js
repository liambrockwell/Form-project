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
   const form = document.forms['myForm']['emailAd'].value
   
   if (form  !== user.email) {
       console.log('you failed')
       return false;
   } else{
       console.log('welcome')
   }
 }
 document.querySelector('form').addEventListener('submit', formVal)
//user.myFunc()