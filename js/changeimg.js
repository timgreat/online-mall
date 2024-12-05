//轮播图切换
var index=1;
var p1=document.getElementById('p1');
var p2=document.getElementById('p2');
var p3=document.getElementById('p3');
var p4=document.getElementById('p4');
function changepic(i){
    index=i;
    display(index);
}
function prevpic(){
    if(index==1)
        index=4;
    else
        index--;
    display(index);
}
function nextpic(){
    if(index==4)
        index=1;
    else
        index++;
    display(index);
}
function display(i){
    switch (i){
        case 1:
            p1.style.display='block';
            p2.style.display='none';
            p3.style.display='none';
            p4.style.display='none';
            break;
        case 2:
            p1.style.display='none';
            p2.style.display='block';
            p3.style.display='none';
            p4.style.display='none';
            break;
        case 3:
            p1.style.display='none';
            p2.style.display='none';
            p3.style.display='block';
            p4.style.display='none';
            break;
        case 4:
            p1.style.display='none';
            p2.style.display='none';
            p3.style.display='none';
            p4.style.display='block';
            break;
    }
}