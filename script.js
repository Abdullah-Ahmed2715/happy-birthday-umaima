// ================================
// Elements
// ================================

const loading = document.getElementById("loading");
const welcome = document.getElementById("welcome");
const heartGame = document.getElementById("heartGame");
const giftSection = document.getElementById("giftSection");
const cakeSection = document.getElementById("cakeSection");
const letterSection = document.getElementById("letterSection");
const finalSection = document.getElementById("finalSection");

const startBtn = document.getElementById("startBtn");
const finishBtn = document.getElementById("finishBtn");
const replayBtn = document.getElementById("replayBtn");

const heart = document.getElementById("heart");
const scoreText = document.getElementById("score");

const gift = document.getElementById("giftBox");
const flame = document.getElementById("flame");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const cursor = document.getElementById("cursorGlow");

let score = 0;

// ================================
// Helper Functions
// ================================

function hideAll(){

    document.querySelectorAll(".screen").forEach(screen=>{

        screen.classList.add("hidden");
        screen.classList.remove("active");

    });

}

function show(screen){

    hideAll();

    screen.classList.remove("hidden");
    screen.classList.add("active");

}

// ================================
// Loading Screen
// ================================

window.onload = ()=>{

    setTimeout(()=>{

        show(welcome);

    },3000);

};

// ================================
// Music
// ================================

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.currentTime = 103;

        music.play();

        musicBtn.innerHTML="⏸️";

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵";

    }

});

// Loop from 1:43

music.addEventListener("timeupdate",()=>{

    if(music.currentTime >= music.duration-0.5){

        music.currentTime=103;

        music.play();

    }

});

// ================================
// Welcome
// ================================

startBtn.onclick=()=>{

    if(music.paused){

        music.currentTime=103;
        music.play();

    }

    show(heartGame);

};

// ================================
// Heart Game
// ================================

heart.onclick=()=>{

    score++;

    scoreText.innerHTML=score;

    heart.style.left=Math.random()*250-120+"px";
    heart.style.top=Math.random()*180-90+"px";

    heart.style.position="relative";

    if(score>=5){

        setTimeout(()=>{

            show(giftSection);

        },600);

    }

};

// ================================
// Gift
// ================================

gift.onclick=()=>{

    gift.innerHTML="💖";

    gift.style.transform="scale(1.4)";

    setTimeout(()=>{

        show(cakeSection);

    },1000);

};

// ================================
// Candle
// ================================

flame.onclick=()=>{

    flame.style.display="none";

    setTimeout(()=>{

        show(letterSection);

    },1200);

};

// ================================
// Letter
// ================================

finishBtn.onclick=()=>{

    show(finalSection);

};

// ================================
// Replay
// ================================

replayBtn.onclick=()=>{

    score=0;

    scoreText.innerHTML=0;

    gift.innerHTML="🎁";

    gift.style.transform="scale(1)";

    flame.style.display="block";

    music.currentTime=103;

    show(welcome);

};

// ================================
// Cursor Glow
// ================================

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX-12+"px";
    cursor.style.top=e.clientY-12+"px";

});