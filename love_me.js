function yesLove() {
    alert("Yes. You are right");
}
function noLove(){
    let a = Math.round(Math.random() * window.innerWidth );
    let b = Math.round(Math.random() *window.innerHeight);
    document.getElementById('No').style.left = a + 'px';
    document.getElementById('No').style.top = b + 'px';
}
