
function button() {
    let menu = document.getElementById('menu');
    let list = menu.getElementsByTagName('li');
    let s=""; let p="";
    for (i=0; i<list.length; i++) {
    s = list[i].innerHTML;
    p += `${s}`;
    
    menu_button.innerHTML = p;
   
    menu_button.style.width = "150px";
    }
}
