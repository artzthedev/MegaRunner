const player = document.getElementById("player");

function jump() {
    player.classList.add("jump");

    setTimeout(function () {
        player.classList.remove("jump");
    }, 500)
}

document.addEventListener("keydown", function (event) {
    jump();
});
