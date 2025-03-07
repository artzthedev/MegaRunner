const player = document.getElementById("player");
const enemies = document.getElementsByClassName("enemies");

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        jump();
    }
});


const jumpSpritesAnimation = document.getElementById("player");

const sprites = [
    "jump3.png", "jump6.png", "jump8.png", "jump8.png",
    "jump8.png", "jump8.png", "jump10.png", "jump12.png"
];

let frame = 0;
function animateSprite() {
    player.style.backgroundImage = `url(/chars/megaman_sprites/Megaman8/${sprites[frame]})`;
    frame = (frame + 1) % sprites.length;
};

function jump() {
    if (!player.classList.contains("jump")) {
        player.classList.add("jump");
        let spriteInterval = setInterval(animateSprite, 75);

        setTimeout(() => {
            player.classList.remove("jump");
            clearInterval(spriteInterval);
            player.style.backgroundImage = "url(/chars/megaman_sprites/Megaman8/run1.png)";
        }, 600);
    }
};

let running = setInterval(function () {
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

    let enemiesLeft = parseInt(window.getComputedStyle(enemies).getPropertyValue("left"));
}, 10);