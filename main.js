
function test(){
  var num = Number(document.getElementById('textNum').value);
  if(num % 2 == 0){
    document.getElementById('spaResult').innerHTML = num + "&nbsp number is even";
  }
  else{
    document.getElementById('spaResult').innerHTML = num + "&nbsp number is odd";
  }
} 

function reset(){
  document.getElementById('textNum').value = 0;
  document.getElementById('spaResult').innerHTML = "Enter number";
}
