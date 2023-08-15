let actual ='';

function cambiocolor(element,color){
    element.style.backgroundColor = color;
}
document.getElementById("azul").addEventListener("click",() => cambiocolor(event.target, "black"));
document.getElementById("rojo").addEventListener("click",()=> cambiocolor(event.target, "black"));
document.getElementById("verde").addEventListener("click",()=> cambiocolor(event.target, "black"));
document.getElementById("amarillo").addEventListener("click",()=> cambiocolor(event.target, "black"));

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case 'a':
            actual = 'pink';
            break;
        case 's':
            actual = 'orange';
            break;
        case 'd':
            actual = 'cyan';
            break;
        case 'q':
            actual = 'purple';
            break;
        case 'w':
            actual = 'gray';
            break;
        case 'e':
            actual = 'brown';
            break;
    }
    document.getElementById("key").style.backgroundColor = actual;
});