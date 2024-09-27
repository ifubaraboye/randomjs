const d = new Date();
const hour = d.getHours();

const newDate = new Date();
const h = newDate.getHours();
if (h < 12){
    if(hour === 6){
        console.log('Wake up!')
    }
    console.log('Good Morning');
}else if (h < 16) {
    console.log('Good Afternoon')
}else if (h < 20) {
    console.log('Good Evening')
}else {
    console.log('Good Night')
}