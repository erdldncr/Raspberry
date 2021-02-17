function User(fullname,username,email,password,postcode,age,aggrement){
    this.fullname=fullname,
    this.username=username,
    this.email=email,
    this._password="",
    this.postcode=postcode,
    this.age=age,
    this.aggrement=aggrement



function display(){
    event.preventDefault()
    const fullname=document.getElementById("fname").value
    const username=document.getElementById("username").value
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    const postcode=document.getElementById("postCode").value
    const age=document.getElementsByName("age")[0]
    const aggrement=false
    let firstName=fullname.split(" ")[0]
    firstName= new User(fullname,username,email,password,postcode,age,aggrement)
    console.log(firstName)

  
}


