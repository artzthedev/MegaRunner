const player = document.getElementById("player");

function jump() {
    player.classList.add("jump");

    setTimeout(function () {
        player.classList.remove("jump");
    }, 500)
}

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        jump();
    }
});


const jumpSpritesAnimation = document.getElementById("player");

const sprites = [
    "jump1.png", "jump2.png", "jump3.png", "jump4.png",
    "jump5.png", "jump6.png", "jump7.png", "jump8.png",
    "jump9.png", "jump10.png", "jump11.png", "jump12.png"
];

let frame = 0;
function animateSprite() {
    player.style.backgroundImage = `url(/chars/megaman_sprites/${sprites[frame]})`;
    frame = (frame + 1) % sprites.length;
}

function jump() {
    if (!player.classList.contains("jump")) {
        player.classList.add("jump");
        let spriteInterval = setInterval(animateSprite, 50);

        setTimeout(() => {
            player.classList.remove("jump");
            clearInterval(spriteInterval);
            player.style.backgroundImage = "url(/chars/megaman_sprites/run1.png)";
        }, 600);
    }
}
