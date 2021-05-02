let btn = document.querySelector('.off');
btn.onclick = function(){
  if(btn.textContent == 'Machine is off'){
  btn.textContent = 'Machine is on';
}else{
  btn.textContent = 'Machine is off';
}
}
