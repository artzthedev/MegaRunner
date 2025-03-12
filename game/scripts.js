
/*
    Hello, this JS code is for MegaRunner minigame to run.
    It is open to be edited by other developers.
    It is my first project made without a guide. Enjoy it!
*/

// For Global Use
const player = document.getElementById("player");
const enemies = document.getElementsByClassName("enemies");

// Jump Key
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        jump();
    }
});

// Running Animation
const runSpritesAnimation = document.getElementById("player");

const runSprites = [
    "run1.png", "run2.png", "run3.png", "run4.png", "run5.png",
    "run6.png", "run7.png", "run8.png", "run9.png", "run10.png",
    "run11.png", "run12.png", "run13.png", "run14.png"
];

let runFrame = 0;
function runAnimateSprite() {
    player.style.backgroundImage =
        `url(/chars/megaman_sprites/Megaman8/${runSprites[runFrame]})`;
    runFrame = (runFrame + 1) % runSprites.length;
}

// Jumping Animation
const jumpSpritesAnimation = document.getElementById("player");

const jumpSprites = [
    "jump3.png", "jump6.png", "jump8.png", "jump8.png",
    "jump8.png", "jump8.png", "jump10.png", "jump12.png"
];

let jumpFrame = 0;
function jumpAnimateSprite() {
    player.style.backgroundImage =
        `url(/chars/megaman_sprites/Megaman8/${jumpSprites[jumpFrame]})`;
    jumpFrame = (jumpFrame + 1) % jumpSprites.length;
};

function jump() {
    if (!player.classList.contains("jump")) {
        player.classList.add("jump");
        let spriteInterval = setInterval(jumpAnimateSprite, 75);

        setTimeout(() => {
            player.classList.remove("jump");
            clearInterval(spriteInterval);
        }, 600);
    }
};

// Game Over Tester
let isRunning = setInterval(function () {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

    let enemiesLeft = parseInt(window.getComputedStyle(enemies).getPropertyValue("left"));
}, 10);