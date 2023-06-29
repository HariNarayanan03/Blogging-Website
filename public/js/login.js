function log(){
// const login = document.querySelector('.Login');
const email = document.querySelector(".email");
const names= document.querySelector(".name");
const password = document.querySelector(".password");

    db.collection("users").doc("abc").set({
        name: names.value,
        email: email.value,
        password: password.value,
    }).then((res)=>{
        location.href=`./home.html`;
    })
    .catch((err) =>{
        console.error(err);
    })
} 