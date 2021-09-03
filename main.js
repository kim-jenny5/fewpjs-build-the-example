// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const allHearts = document.querySelectorAll(".like-glyph")

for (heart of allHearts) {
  likeHeart(heart)
}

function likeHeart(heart) {
  heart.addEventListener("click", function (e) {
    mimicServerCall("http://mimicServer.example.com")
      .then(function (resp) {
        // debugger
        if (heart.innerText === EMPTY_HEART) {
          heart.innerText = FULL_HEART
          heart.classList.add("activated-heart")
        } else {
          heart.innerText = EMPTY_HEART
          heart.classList.remove("activated-heart")
        }
      })
      .catch((error) => {
        setTimeout(function () { modal.classList.add("hidden") }, 3000)
        const modal = document.getElementById("modal")
        modal.classList.remove("hidden")
        const modalMsg = document.getElementById("modal-message")
        modalMsg.appendChild(error.message)
        // setTimeout(function () { modal.classList.add("hidden") }, 3000)
      })
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
