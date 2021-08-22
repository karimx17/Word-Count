let submitBtn = document.body.querySelector("button");

submitBtn.addEventListener("click",function(){
    let inputText = document.body.querySelector("input").value.length;
    let wordCount = document.querySelector(".wordCount");
    wordCount.innerHTML = inputText
})