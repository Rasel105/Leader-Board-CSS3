document.getElementById("topPlayer").style.color = "green";
document.getElementById("topBlog").style.color = "purple";

const players = document.getElementsByClassName("player");

for (const player of players) {
    player.style.backgroundColor = "rgb(0, 0, 255)";
    player.style.margin = "5px";
}

document.getElementById("makeList").addEventListener("click", function() {
    const ulList = document.getElementById("ulList");

    const list = document.createElement("li");
    list.innerText = "I love you Maa";
    ulList.appendChild(list);
});

document.getElementById("Button").addEventListener("click", function() {
    const inputValue = document.getElementById("count");
    const inputNewValue = parseInt(inputValue.value) + 1;
    inputValue.value = inputNewValue;
    if (inputValue == 5) {
        document.getElementById("Button").disabled = true;
    }
});