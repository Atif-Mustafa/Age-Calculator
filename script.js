let date = document.getElementById('date');
let years = document.getElementById('years');
let months = document.getElementById('months');
let days = document.getElementById('days');
let form = document.querySelector('.form')

console.log(form)

let dateValue = [];
form.addEventListener('submit', function(e){
    e.preventDefault()
   
    years.innerText = '';
    months.innerText = '';
    days.innerText = '';
    let value = date.value;
    
    if(value === ''){
        alert('Please enter your DOB')
    }
    
    dateValue = value.split("-");
    let d  = new  Date()

    if(parseInt(dateValue[0]) > d.getFullYear())
       {
         alert("NOT BORN YET");
         return
       }
    years.innerText = d.getFullYear() - parseInt(dateValue[0])
    months.innerText = String(d.getMonth()+1).padStart(2,"0") - parseInt(dateValue[1])
    days.innerText = String(d.getDate()).padStart(2,"0") - parseInt(dateValue[2]) 
   
    
    console.log(`${years} ${months} ${days}`)

})