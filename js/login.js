//登录页面切换登录方式
var info=document.getElementById("info");
var info3=document.getElementById("info3");
var zh=document.getElementById("zh");
var sm=document.getElementById("sm");
function displayinfo(num){
    if(num==0){
        info.style.display='block';
        info3.style.display='none';
        zh.style.color='#ff6700';
        sm.style.color='#666';
    }else{
        info.style.display='none';
        info3.style.display='block';
        zh.style.color='#666';
        sm.style.color='#ff6700';
    }
}
//测试登录
var user={'name':'游客1234','password':'123456'};
function test(){
    var name=document.getElementById('name').value;
    var password=document.getElementById('password').value;
    if(user.name==name&&user.password==password){
        document.cookie=name;
        location.href="index.html";
    }
    else{
        window.event.returnValue=false;
         location.href="login.html";
    }
}
