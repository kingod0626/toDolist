const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const list = document.querySelector('.list');
// const delete = document.querySelector('.delete');
let data=[];
// renderData()增加待辦;
function renderData(){
    let str= "";
    data.forEach(function(item,index){
    str+= `<li>${item.content}<input type="button" data-num="${index}" class="delete" value="刪除待辦"></li>`
    })
    console.log(str);
    const list= document.querySelector(".list");
    list.innerHTML = str;
}

// 新增待辦
save.addEventListener('click',function(e){
    if(txt.value==""){
        alert("請打一點東西");
        return;
    }

    let obj = {};
    obj.content = txt.value
    data.push(obj);
    renderData();
})
// 刪除待辦
list.addEventListener("click",function(e){
    if(e.target.getAttribute("class")!=="delete"){
        alert("這不是按鈕!");
        return;
    }
    let num = e.target.getAttribute("data-num");
    data.splice(num,1);
    renderData();
})