var name=document.cookie;
var display1=document.getElementById('display');
if(name!='null'&&name!=''){
    display1.style.display='none';
}else{
    display1.style.display='inline-block';
}