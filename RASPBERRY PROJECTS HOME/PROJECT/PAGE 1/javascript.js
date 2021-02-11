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

////////5th Of Feb////
function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementsByClassName("medium-dropdown")[0].innerHTML += "<i style=\" font-size:32px\" class=\"fas fa-sort-down\"></i> "
      document.getElementsByClassName("row")[1].style.display = "flex";
      document.getElementsByClassName("row")[1].style.flexDirection = "column";
      [...document.getElementsByClassName("sub-medium-dropdown")].forEach(element=>element.classList.add("a"))
      document.getElementById("a").addEventListener("click",changeFont)
      
    } else {
        document.getElementsByClassName("medium-dropdown")[0].innerHTML = "Find a Project:";
        document.getElementsByClassName("row")[1].style.display = "flex";
        document.getElementsByClassName("row")[1].style.flexDirection = "row";
        [...document.getElementsByClassName("sub-medium-dropdown")].forEach(element=>element.classList.remove("a"))
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

  function changeFont(){
      return [...document.getElementsByClassName("sub-medium-dropdown")].forEach(element=>element.classList.toggle("a"))
  }
  
let projectBgColor=Math.floor(Math.random()*(256*256*256))
let projectPColor=projectBgColor
projectBgColor=projectBgColor.toString(16)
projectBgColor="#"+projectBgColor

$(".sub-project-container").css("background-color",projectBgColor)
$(".sub-project-container h3").css("font-weight","bold")
projectPColor-=Math.floor(Math.random()*(256*256*256))
projectPColor="#"+ projectPColor.toString(16)
const allPInProjects= document.querySelectorAll(".sub-project-container p")
 allPInProjects.forEach(element=>element.style.color=projectPColor)
////////////////////////////Filtering Nav Bar//////////////////
function filter(selectedDropDown){
  let selectedOption= selectedDropDown.options[selectedDropDown.selectedIndex].value
  let selectedOptionProjects=document.querySelectorAll(".project")

    
}









 //adding marging
$(".sub-project-container").css("padding","10px");
//footer
$("footer").addClass("footer")

///Footer PAge counter
var count=1;
console.log(count)
// var urlOfPage="../PAGE "+count+"/index.html"
document.querySelector(".left").addEventListener("click",buttonClickedLeft)
function buttonClickedLeft(){
   
    console.log(count)
    let myFooterP=document.querySelector("#element")

    if(count!=1){
    count--;
    myFooterP.innerHTML="Page "+count+" of 9"
    document.querySelector(".left").style.opacity="1"
   
    // var urlOfPage="../PAGE "+count+"/index.html"
    // document.querySelector(".left-a").setAttribute("href",urlOfPage)
    }else if(count==0) {
        document.querySelector(".left").style.opacity="0"
    }
    
}
document.querySelector(".right").addEventListener("click",buttonClickedRight)
function buttonClickedRight(){
    
    console.log(count)
    let myFooterP=document.querySelector("#element")
    if(count!=9){
        count++;
        myFooterP.innerHTML="Page "+count+" of 9"
        // var urlOfPage="../PAGE "+count+"/index.html"
        // document.querySelector(".right-a").setAttribute("href",urlOfPage)
        }else if(count==9) {
            document.querySelector(".left").style.opacity="0"
        }
        
    
}

function next(nextClicked){
    if(count!=9){
    nextClicked.setAttribute("target","_blank")
    var urlOfPage="../PAGE "+count+"/index.html"
   return nextClicked.setAttribute("href",urlOfPage)
    }else{
        nextClicked.setAttribute("target","_self")
    }
}
function back(nextClicked){
    if(count!=1){
        nextClicked.setAttribute("target","_blank")
    var urlOfPage="../PAGE "+count+"/index.html"
   return nextClicked.setAttribute("href",urlOfPage)
    }else{
        nextClicked.setAttribute("target","_self")
    }
}


// document.querySelector(".left-a").setAttribute("href",'../PAGE 1/index.html')
// console.log(document.querySelector("footer a"))
// function nextPage(){
 
//     var urlOfPage="../PAGE "+count+"/index.html"
//     return document.querySelector(".right a").setAttribute("href",urlOfPage)
// }


// function buttonAnimation(currentKey){
//     var active=document.querySelector("."+currentKey)
//     active.classList.toggle("pressed")
    // setTimeout(function(){
    //         active.classList.toggle("pressed")
    // },100)
    // }



// $("footer p").css("font-size","2rem")

// $("h1");// document.querySelector("h1")
// $("button")  //  document.querySelectorAll("button")
// $("h1").css("color","#ffff00"); //document.querySelector("h1").style.color="#FFFF00"
// $("h1").addClass("big-title") // document.querySelector("h1").classList.add("big-title")
// $("h1").removeClass("big-title") // document.querySelector("h1").classList.remove("big-title")
// $("h1").addClass("big-title margin-50")//to add multiple classes
// console.log($("h1").hasClass("margin-50"))// to check whether it has margin-50 or not
// $("h1").text("Merhaba");//document.querySelector("h1").innerHTML="Merhaba"
// $("button").text("Don't click me") // document.querySelectorAll("button").forEach(element=>element.innerHTML="Don't click me!")
// $("button").html("<i>click me<i>")// the same with text but you can add html tags 
