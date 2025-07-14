const form = document.querySelector('form')
//this will give you empty ->
//const height= parseInt(document.querySelector('.height').value)


form.addEventListener('submit',function(event){
    event.preventDefault()

   const height= parseInt(document.querySelector('#height_input').value)
   const weight= parseInt(document.querySelector('#Weight_input').value)
   const result=document.querySelector('#result')  //add value in result if value are ok


if(height === ' ' || height < 0   || isNaN(height)){
result.innerHTML="please giva a valid height"
}

else if(weight < 0 || isNaN(weight) || weight===" "){
    result.innerHTML="please give a valid weight"
}
else{
   const bmi= (weight /((height *height)/10000)).toFixed(2)

   result.innerHTML=`<span>${bmi}</span>`
}





})