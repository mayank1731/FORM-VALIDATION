
function validForm(){
let found= true;


const FirstName = document.getElementById('text').value
const LastName = document.getElementById('text1').value
const Number = document.getElementById('number').value
const Email = document.getElementById('email').value

if (FirstName === "" ) {
    alert("enter Firstname")
    found=false
} else if (LastName === "" ) {
    alert("enter  Lastname")
    found=false    
}else if (Number === "") {
    alert("enter valid number")
    found=false
}else if (Email ==="") {
    alert("enter valid email")
    found=false
} else if (found=== true) {
    alert("Form submitted successfully");
}
}