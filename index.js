let btn = document.querySelector('.btn')
let age = document.getElementById('age')
let close_Alert = document.querySelector('.alert')


// console.log(btn);



const checkAge =()=>{
//    console.log('clicked');
    // console.log(age.value)
    if(age.value === ""){
        alert('please Enter you age.')
    }
   else if(age.value >=18){
   alert('Your age is above 18 so, You can drink alcohol 🍻🍻')
    }
    else if(age.value <18 ){
        alert('Your age is below 18 so, You can not drink alcohol but you can drink cooldrink 🍹🍸');
    }
  
}

