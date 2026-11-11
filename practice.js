function check(){

    let birthYear = document.getElementById('input').value
    let displayArea = document.getElementById('display')
    if(birthYear ==''){
    alert('input should not be empty')
}
let currentYear = new Date().getFullYear()
let age = currentYear - Number(birthYear)
if (age >= 18){
    displayArea.innerHTML = `<p>vote dey go</p>`
}else if(age < 18){
    displayArea.innerHTML = `<p>grow up fast you have ${18-age} more years to vote</p>`
}
}