const button=document.querySelectorAll('.color')
const body=document.querySelector('body')

button.forEach(function(select){
console.log(select)
    select.addEventListener('click',function(event){
       console.log(event) 
       console.log(event.target)
       body.style.backgroundColor=select.style.backgroundColor;
    })
})
