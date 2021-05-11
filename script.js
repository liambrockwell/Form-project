document.querySelector('form').addEventListener('submit', function(e){
 e.preventDefault()
})



 user = {
    email:'liam@23com',
    password:'liam',
    myFunc(email=user.email,password=user.password) {
       
    }
}
const logIn = (userEm) =>{
    if(userEm != user.email){
        console.log('go away');
    } else{
        console.log('hiiii');
    }
 }

 const formVal = () => {
   form = document.querySelector('form')
   usrEmail = form.elements[0];
   usrEmailInp = 'liam@23com';
   return usrEmailInp
 }
 logIn(formVal())
//user.myFunc()