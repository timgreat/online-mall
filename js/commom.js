//主页相关显示的控制
var hot=document.getElementById("hot");
var q=document.getElementById("q");
var submit=document.getElementById("submit");
var log=document.getElementById('log');
var reg=document.getElementById('reg');
var user=document.getElementById('user');
var information=document.getElementById('information');
var tui=document.getElementById('tui');
var timer = null;
var name=document.cookie;
if(name!='null'&&name!=''){
    reg.style.display='none';
    log.style.display='none';
    //console.log(name);
    user.innerHTML=name;
    user.style.display='inline';
    information.style.display='inline';
    tui.style.display='inline';
}else{
    reg.style.display='inline';
    log.style.display='inline';
    user.style.display='none';
    information.style.display='none';
    tui.style.display='none';
}
function tuichu(){
    document.cookie=null;
    location.href="index.html";
}
function displayHot(){
    hot.style.display="block";
    q.style.borderColor="#ff6700";
    submit.style.borderColor="#ff6700";
}
function hiddenHot(){
    //设置定时器，使得失焦时下拉搜索并不会立即消失，可以点击相关链接
    if(timer!=null)
        clearTimeout(timer);
    timer=setTimeout(function() {
        hot.style.display="none";
        q.style.borderColor="#d8d7d7";
        submit.style.borderColor="#d8d7d7";
    }, 500);
}
