//检查用户输入
var info1=document.getElementById("info1");
var info2=document.getElementById("info2");
var info3=document.getElementById("info3");
var info4=document.getElementById("info4");
function checkName(){
    var name=document.getElementById("name").value; 
    if(name.length==0){
        info1.innerHTML='用户名不能为空';
        info1.style.display='block';
    }else if(name.indexOf(' ')>=0){
        info1.innerHTML='请不要输入空格等无效字符';
        info1.style.display='block';
    }else if(name.length<6||name.length>20){
        info1.innerHTML='用户名应为6到20位字符';
        info1.style.display='block';
    }
}
function displayName(){
    info1.style.display='none';
}
function checkPassword(){
    var password=document.getElementById("password").value;
    if(password.length==0){
        info2.innerHTML='密码不能为空';
        info2.style.display='block';
    }else if(password.indexOf(' ')>=0){
        info2.innerHTML='请不要输入空格等无效字符';
        info2.style.display='block';
    }else if(password.length<6|password.length>20){
        info2.innerHTML='密码应为6到20位字符';
        info2.style.display='block';
    }
}
function displayPassword(){
    info2.style.display='none';
}
function checkPhone(){
    var phone=document.getElementById("phone").value;
    var reg=/^(1[3456789]\d{9})$/;
    if(phone.length==0){
        info3.innerHTML='号码不能为空';
        info3.style.display='block';
    }else if(!reg.test(phone)){
        info3.innerHTML='请输入正确的手机号';
        info3.style.display='block';
    }
}
function displayPhone(){
    info3.style.display='none';
}
function checkEmail(){
    var email=document.getElementById("email").value;
    var reg=/^\w+@[a-z0-9]+\.[a-z]+$/;
    if(email.length==0){
        info4.innerHTML='邮箱不能为空';
        info4.style.display='block';
    }else if(!reg.test(email)){
        info4.innerHTML='请输入正确的邮箱格式';
        info4.style.display='block';
    }
}
function displayEmail(){
    info4.style.display='none';
}