const timeElement = document.getElementById("time") ;
const start= document.getElementById("start") ;
const stop = document.getElementById("stop") ;
const reset = document.getElementById("reset") ;

let elapsed = 0;

let intervalId = null;

function updateTime() {
  const ms = elapsed % 1000;
  const s = Math.floor(elapsed / 1000) % 60;
  const m = Math.floor(elapsed / (1000*60)) % 60;
  const h = Math.floor(elapsed / (1000*60*60));
  
  
  const msStr = ms.toString().padStart(3, '0');
  const sStr = s.toString().padStart(2, '0');
  const mStr = m.toString().padStart(2, '0');
  const hStr = h.toString().padStart(2, '0');
  
  timeElement.innerHTML = `${hStr}:${mStr}:${sStr}.${msStr}`;
}

//スタートボタン

start.addEventListener("click", function(e) {
  if (intervalId !== null) { return; } 
  let pre = new Date();
  intervalId = setInterval(function() {
    const now = new Date();
    elapsed += now - pre;
    pre = now;
    updateTime()
    //console.log(elapsed);
  },10);
  start.classList.add('inactive');
  stop.classList.remove('inactive');
  reset.classList.add('inactive');
  
  　if (start.classList.contains('inactive') === true) {
  　  return;
  }
  classList.remove
  
  function setDisabled(){
    document.getElementById('start').disabled = true;
    document.getElementById('reset').disabled = true;
  }
  
});  

//ストップボタン

stop.addEventListener("click",function(e){
  clearInterval(intervalId)
  intervalId = null;
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.remove('inactive');
  
  　if (stop.classList.contains('inactive') === true) {
  　  return;
  }
  classList.remove
  });
   
   
  
   

//リセットボタン

reset.addEventListener("click",function(e){
  elapsed = 0;
  updateTime();
  start.classList.remove('inactive');
　stop.classList.add('inactive');
　reset.classList.add('inactive');
　
　　if (reset.classList.contains('inactive') === true) {
  　  return;
  }
  classList.remove
  });


  start.classList.remove('inactive');
	stop.classList.add('inactive');
	reset.classList.add('inactive');
	
	
	
	function setDisabled(){
    document.getElementById('start').disabled = true;
    document.getElementById('reset').disabled = true;
    document.getElementById('stop').disabled = false;
  }
  
  
  function removeDisabled(){
    document.getElementById('start').disabled = false;
    document.getElementById('reset').disabled = false;
    document.getElementById('stop').disabled = true;
  }
  
  
  function touchDisabled(){
    document.getElementById('start').disabled = false;
    document.getElementById('reset').disabled = true;
    document.getElementById('stop').disabled = true;
  }