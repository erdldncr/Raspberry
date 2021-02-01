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

// GET-STRATED-SECTION
var shortText=document.getElementsByClassName("short-text");
const mediaQuery = window.matchMedia('(max-width: 770px)')
shortText.addListener(ChageDisplay)

function ChangeDisplay(mediaQuery){
    if(!mediaQuery.matches){
        for(var i=0;i<shortText.length;i++){
            shortText[i].style.display="none"
        }
    }
}
// media query event handler
// if (matchMedia) {
//     const mq = window.matchMedia("(max-width: 770px)");
//     mq.addListener(WidthChange);
//     WidthChange(mq);
//     }
    
//     // media query change
//     function WidthChange(mq) {
//     if (mq.matches) {
//     // window width is at least 500px
//     } else {
//     // window width is less than 500px
//     }
    
//     }