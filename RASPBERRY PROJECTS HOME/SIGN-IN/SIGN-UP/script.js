function User(fullname,username,email,password,postcode,age,aggrement){
    this._fullname=fullname,
    this.username=username,
    this.email=email,
    this._password="",
    this.postcode=postcode,
    this.age=age,
    this.aggrement=aggrement
}
Object.defineProperty(User.prototype,"fullname",{
    set: function(value){
        if(value.length<8){
            this._fullname="invalid"
        }else{
            this._fullname=value
        }
    }
})



function display(){
    event.preventDefault()
    let fullname=document.getElementById("fname").value
    let username=document.getElementById("username").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let postcode=document.getElementById("postCode").value
    let age=document.getElementsByName("age")[0]
    let aggrement=document.querySelector("#agreement").checked
    let firstName=fullname.split(" ")[0]
    firstName= new User(fullname,username,email,password,postcode,age,aggrement)
    console.log(firstName)
    
    
}

////addd hid-show to password input

document.getElementById("show").addEventListener("click",function(){
   if(document.getElementById("show").textContent=="Show"){
       document.getElementById("password").setAttribute("type","text")
    document.getElementById("show").innerHTML="<strong>Hide</strong>"
   }else{
    document.getElementById("password").setAttribute("type","password")
    document.getElementById("show").innerHTML="<strong>Show</strong>"
   }
   
})
///check age
document.getElementsByName("age").forEach(item=>{item.addEventListener("click",function(){
    User.age=item.attributes["id"].value
    console.log(User.age)
    if(item.attributes["id"].value=="under13"){
      
    window.location.href = "http://www.w3schools.com";
    }
})
  
})
document.querySelectorAll("span.age").forEach(item=>item.style="font-size:1.3rem;")

////Agremeent////
document.querySelector("#agreement").style.width="initial"

//Button
const button=document.querySelector("button")
button.textContent="Sign Up"
button.style.borderRadius="5px"
button.style.margin="10px"