function plusFunc(){
  let num1 = document.getElementById('num1').value
  let num2 = document.getElementById("num2").value
  document.getElementById("MyId").innerHTML = parseInt(num1) + parseInt(num2)
}
function minusFunc(){
  let num1 = document.getElementById('num1').value
  let num2 = document.getElementById("num2").value
  document.getElementById("MyId").innerHTML = parseInt(num1) - parseInt(num2)
}
function multiFunc(){
  let num1 = document.getElementById('num1').value
  let num2 = document.getElementById("num2").value
  document.getElementById("MyId").innerHTML = parseInt(num1) *  parseInt(num2)
}
function divFunc(){
  let num1 = document.getElementById('num1').value
  let num2 = document.getElementById("num2").value
  document.getElementById("MyId").innerHTML = parseInt(num1) / parseInt(num2)
}
function clearFunc(){
  num1.value = ''
  num2.value = ''
  document.getElementById("MyId").innerHTML = 'Result here'
  
}