function show(){
    let x=document.getElementById('nav_list');
    document.getElementById('nav_list').style.transition="all 2s ";
    
    if (x.style.display === "none")
    {
        x.style.display="block"
    
    }
    else{x.style.display="none";
    }
    } 
    
    // window.addEventListener('abort',)
    window.addEventListener('load',function (){
        let  d=new Date();
        var tab=String(d).split(' ');
        var t=tab[4].split(':');
         if(t[0]>=15 && t[0]<=23){
             document.getElementById('o_c').classList.add('op');
         }
         else{document.getElementById('o_c').classList.add('cl');}
 
 
     })
     window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("btn_scroll").style.display = "block";
  }
//   else if (document.body.scrollTop === 0 ||document.documentElement.scrollTop === 0){ document.getElementById("btn_scroll").style.display = "none";}
  else {
    
    document.getElementById("btn_scroll").style.display = "none";
  }
}