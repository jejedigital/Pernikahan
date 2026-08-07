const cover=document.getElementById("cover"),main=document.getElementById("main");
document.getElementById("openBtn").onclick=()=>{cover.style.display="none";main.classList.remove("hidden");window.scrollTo(0,0);startMusic();};
const target=new Date("2026-08-23T08:00:00+07:00").getTime();
function tick(){let d=Math.max(0,target-Date.now());let s=Math.floor(d/1000);document.getElementById("days").textContent=Math.floor(s/86400);s%=86400;document.getElementById("hours").textContent=Math.floor(s/3600);s%=3600;document.getElementById("minutes").textContent=Math.floor(s/60);document.getElementById("seconds").textContent=s%60}
tick();setInterval(tick,1000);

let ctx,osc,gain,playing=false;
function startMusic(){if(playing)return;playing=true;try{ctx=new (window.AudioContext||window.webkitAudioContext)();gain=ctx.createGain();gain.gain.value=.025;gain.connect(ctx.destination);osc=ctx.createOscillator();osc.type="sine";osc.frequency.value=261.63;osc.connect(gain);osc.start();}catch(e){}}
document.getElementById("musicBtn").onclick=()=>{if(!ctx){startMusic();return} if(playing){gain.gain.value=0;playing=false}else{gain.gain.value=.025;playing=true}};
