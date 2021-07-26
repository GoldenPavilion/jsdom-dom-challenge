setTimeout(start, 1000);

let i = 0;
let count = document.getElementById("counter");
let subtract = document.getElementById("minus");
let add = document.getElementById("plus");
let like = document.getElementById("heart");

function start(){
    setInterval(increase, 1000);
}

function increase(){
    i++;
    count.innerText = i;
}

function decrease(){
    i--;
    count.innerText = i;
}

subtract.addEventListener("click", function(){
    decrease();
})

add.addEventListener("click", function(){
    increase();
})

like.addEventListener("click", function(){
    let likeList = document.getElementsByClassName("likes");
    let item = document.createElement("li");
    
    item.innerText = `${i} Liked`;
    likeList.appendChild(item);
})