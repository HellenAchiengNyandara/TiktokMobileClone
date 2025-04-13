const likeBtn = document.getElementById('like-btn');
const heartIcon = document.getElementById('heart-icon');
const likeCount = document.getElementById('like-count');

let count = parseInt(likeCount.innerText.replace(/,/g, ''));
let liked = false;

likeBtn.addEventListener('click', () => {
  liked = !liked;

  if (liked) {
    count++;
    heartIcon.classList.remove('far');
    heartIcon.classList.add('fas');
    heartIcon.style.color = 'red';
  } else {
    count--;
    heartIcon.classList.remove('fas');
    heartIcon.classList.add('far');
    heartIcon.style.color = '';
  }

  likeCount.innerText = count.toLocaleString();
});
