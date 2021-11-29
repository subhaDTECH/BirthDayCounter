let NewyearsTime= '4 Dec 2020';
const daysdata=document.getElementById('days')
const hoursdata=document.getElementById('hours')
const minituesdata=document.getElementById('minitues')
const secondsdata=document.getElementById('seconds')

function counter(){
    
    const newtime= new Date(NewyearsTime)
    const currentdate= new Date();

    let totalTimeInmileseconds=(newtime-currentdate)/1000;
    console.log(totalTimeInmileseconds)

const days=Math.floor(totalTimeInmileseconds/3600/24)
const hours=Math.floor(totalTimeInmileseconds/3600)%24
const minitues=Math.floor(totalTimeInmileseconds/60)%60
const seconds=Math.floor(totalTimeInmileseconds) %60

daysdata.innerHTML=days;
hoursdata.innerHTML=formateTime(hours);
minituesdata.innerHTML=formateTime(minitues);
secondsdata.innerHTML=formateTime(seconds);

  
}
function formateTime(time){
     return time <10 ? `0${time}` :time
}
counter();
setInterval(counter,1000);

