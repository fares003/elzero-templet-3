/*start mega menue*/
let megaMenu =document.querySelector(".megamenu");
let mega=document.querySelector(".mega a");

mega.onclick=function(){

    if(megaMenu.style.display==="flex")
{
    megaMenu.style.display="none";
}else{
    megaMenu.style.display="flex";
}
}
/*end mega menue*/
/*start up-button*/
let button=document.querySelector(".up-button");
window.onscroll=function(){
    if(window.scrollY>753.5999755859375){
        button.style.display="block";
    }
    else{
        button.style.display="none";
    }
}
/*end up-button*/
/*start date*/

    let date=document.querySelectorAll(".latest .container .events .date span h2");
    setInterval(function(){
        let t=90;

        while(t!=0)
        {
        t=t-1;
        console.log(`${t}`)
        }
    }
        ,1000)
/*end date*/