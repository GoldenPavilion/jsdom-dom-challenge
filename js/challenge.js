setTimeout(start, 1000);

let interval = setInterval(increase, 1000);
let i = 0;
let count = document.getElementById("counter");
let subtract = document.getElementById("minus");
let add = document.getElementById("plus");
let like = document.getElementById("heart");
let likedNumbers = {}
let likeList = document.querySelector("ul.likes")
let pause = document.getElementById("pause");
let submit = document.getElementById("submit");
let commentForm = document.getElementById("comment-form");
let commentList = document.getElementById("list");

function start(){
    interval;
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
    let item = document.createElement("li");

    if (likedNumbers[i]){
        likedNumbers[i]+=1;
        item.innerText = `${i} Like ${likedNumbers[i]} Times.`
        likeList.appendChild(item);
    } else {
        likedNumbers[i] = 1;   
        item.innerText = `${i} Liked Once`;
        likeList.appendChild(item);
    }
})

pause.addEventListener("click", function(){
    if (pause.innerText == "pause"){
        clearInterval(interval)
        pause.innerText = "resume";
        subtract.disabled = true;
        add.disabled = true;
        like.disabled = true;
        submit.disabled = true;
    } else {
        setInterval(increase, 1000);
        pause.innerText = "pause";
        subtract.disabled = false;
        add.disabled = false;
        like.disabled = false;
        submit.disabled = false;
    }
})

commentForm.addEventListener("submit", function(e){
    e.preventDefault();    
    let newComment = document.getElementById("comment-input").value;
    let listItem = document.createElement("li");
    if (newComment != ""){
        listItem.innerText = newComment;
        commentList.appendChild(listItem);
    }
})



