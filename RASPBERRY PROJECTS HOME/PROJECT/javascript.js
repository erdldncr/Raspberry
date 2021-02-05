document.querySelector("select").addEventListener('click',function(){
    var a=document.querySelector("select").value;
    document.querySelector("html").lang=a;
})


var a=document.querySelectorAll(".get-started h4");
console.log(a)
for(var i=0;i<a.length;i++){
    var randomBgColor=Math.floor(Math.random()*16777215).toString(16);
    console.log(typeof(randomBgColor))
    document.querySelectorAll("h4")[i].style.backgroundColor="#"+randomBgColor;
   
}
var days=["SUNDAY",'MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY']
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var date=new Date();
document.querySelector(".date p").innerHTML=date.getUTCFullYear()+"-"+months[date.getUTCMonth()]+"-"+date.getUTCDate()+"-"+days[date.getUTCDay()]


function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementsByClassName("medium-dropdown")[0].innerHTML += "🔻 ";
      document.getElementsByClassName("row")[1].style.display = "flex";
      document.getElementsByClassName("row")[1].style.flexDirection = "column";
      
    } else {
        document.getElementsByClassName("medium-dropdown")[0].innerHTML = "Find a Project:";
        document.getElementsByClassName("row")[1].style.display = "flex";
        document.getElementsByClassName("row")[1].style.flexDirection = "row";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
  

  document.getElementsByClassName("medium-dropdown")[0].addEventListener("mouseover",addClass)
  //document.getElementsByClassName("sub-medium-dropdown")[0].style.display="none"
  function addClass(x){
      if(x.matches){
          document.getElementsByClassName("sub-medium-dropdown")[0].classList.add("a")
      }
  }