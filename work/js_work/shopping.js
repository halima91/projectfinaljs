function show(){
    let x=document.getElementById('nav_list');
    document.getElementById('nav_list').style.transition="all 2s ";
    
    if (x.style.display === "none")
    {
        x.style.display="block"
    
    }
    else{x.style.display="none"
    }
}
function add(){
    let nesrine=document.getElementById('card3');
    let art=document.getElementById('elmts');
    art.innerHTML=nesrine;
}
function myFunction() {
    var myWindow = window.open("", "_self");
    myWindow.document.write("<p>I replaced the current window.</p>");
  }