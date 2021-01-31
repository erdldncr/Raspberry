document.querySelector("select").addEventListener('click',function(){
    var a=document.querySelector("select").value;
    document.querySelector("html").lang=a;
})


var a=document.querySelectorAll("h4");
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

