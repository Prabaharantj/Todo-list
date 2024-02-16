let buttons=document.getElementById("btn");
let list=document.getElementById("listbox");
let input=document.getElementById("inputbox");

let todolist=[];
window.onload= ()=>{
    getlist=JSON.parse(localStorage.getItem("todolist")) || [];
    getlist.forEach(listto=>listshow(listto))
}

buttons.addEventListener('click',()=>{
      todolist.push(input.value);
      localStorage.setItem('todolist',JSON.stringify(todolist))
     listshow(input.value);
     input.value=''
})
function listshow(listto){
      let para= document.createElement('p');
      para.innerHTML=listto;
      list.appendChild(para)

      para.addEventListener('click',()=>{
        para.style.textDecoration="line-through";
        removelist(listto)
      })

      para.addEventListener('dblclick',()=>{
          list.removeChild(para)
          removelist(listto)
      })
}
function removelist(listto){
  let index=todolist.indexOf(listto);
  if(index>-1){
    todolist.slice(index,1)
  }
  localStorage.setItem('todolist',JSON.stringify(todolist))
}