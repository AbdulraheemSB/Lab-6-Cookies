const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

const initLikes = 100;
const initDislikes = 20; 

let likesCount = initLikes;
let dislikesCount = initDislikes;

likeBtn.innerText = "👍 " + likesCount;
dislikeBtn.innerText = "👎 " + dislikesCount;


function handleLike(){

   likesCount++;
   likeBtn.innerText = "👍 " + likesCount;
   disableButtons();
   setCookie();

}

function handleDislike(){

    dislikesCount++;
    dislikeBtn.innerText = "👎 " + dislikesCount;
    disableButtons();
    setCookie();
 
 }
 
function disableButtons(){
    likeBtn.disabled = true;
    dislikeBtn.disabled = true;

}

function setCookie(){

    document.cookie = "voted=true; SameSite=Strict; Max-Age=60"
}

window.onload = function(){
    if(document.cookie && document.cookie.indexOf("voted")> -1){
        disableButtons();
    }
}