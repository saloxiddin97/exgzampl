let btn=document.querySelector('button')
let div=document.querySelector('div')
 
btn.addEventListener('click',()=>{
    let inp=document.querySelector('input').value
 if(inp ===''){
   
 }else{
    let newli=document.createElement('li')
    div.appendChild(newli)
    newli.textContent=inp

 }
})



