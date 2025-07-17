const StartBtn=document.getElementById('start');
const EndBtn=document.getElementById('end')
const hex="0123456789ABCDEF"
//generate random color
const randomColor=function(){
    let color='#'
    for(let i=0;i<6;i++){
     color+=hex[Math.floor(Math.random() *16)]
    }
    return color; 
};
let intervalId;
 const startChangingColor=function(){
    if(!intervalId){
   intervalId= setInterval(function(){
    document.body.style.backgroundColor =randomColor()
 },2000)}};

 const stopChangingButton=function(){clearInterval(intervalId)
    intervalId=null;  //we are overwriting it again and again so making it null to clean the code 
}
StartBtn.addEventListener('click',startChangingColor);
EndBtn.addEventListener('click',stopChangingButton);