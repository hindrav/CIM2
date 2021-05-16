var prodCont = document.querySelector('.products--container');
var servCont = document.querySelector('.services--container');
var btnx1 = document.querySelector('.btnx1');
var btnx2 = document.querySelector('.btnx2');
var btnx3 = document.querySelector('.btnx3');
var btnx4 = document.querySelector('.btnx4');

btnx1.onclick = () => {
    prodCont.scrollLeft -= 270;
}
btnx3.onclick = () => {
    servCont.scrollLeft -= 270;
}
btnx2.onclick = () => {
    prodCont.scrollLeft += 270;
}
btnx4.onclick = () => {
    servCont.scrollLeft += 270;
}

