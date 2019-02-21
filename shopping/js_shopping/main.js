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
function sum_total(i){
    let prix=document.getElementById('price'+i).textContent;
    let total=document.getElementById('total').textContent;
    let x=parseInt( prix.replace("DTN",''));
    let y=parseInt( total.replace("DTN",''));
    let s=x+y;
    let elmt=document.getElementById(card3)
    let num=parseInt( document.getElementById('notif').textContent);
    document.getElementById('total').innerHTML=s+"DTN";
    num++;
    document.getElementById('notif').innerHTML=num;
    document.getElementById('notif').style.display="block";

}
let elmt=document.getElementById(card3)