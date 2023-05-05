// Get references to DOM elements
const tweetForm = document.getElementById('tweet-form');
const tweetInput = document.getElementById('tweet-input');
const charCounter = document.getElementById('char-counter');
const tweetButton = document.getElementById('tweet-button');
const tweetList = document.getElementById('tweet-list');

// Add event listener to tweet form to handle tweet submission
tweetForm.addEventListener('submit', (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Create new tweet element and add to tweet list
  const newTweet = document.createElement('div');
  newTweet.classList.add('tweet');

  // Create tweet text element
  const tweetText = document.createElement('div');
  tweetText.classList.add('tweet-text');
  tweetText.innerText = tweetInput.value;
  newTweet.appendChild(tweetText);

  // Create tweet actions element
  const tweetActions = document.createElement('div');
  tweetActions.classList.add('tweet-actions');

  // Create like button and add event listener
  const likeButton = document.createElement('button');
  likeButton.classList.add('like-button');
  likeButton.innerHTML = '&#x2764;';
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
  });
  tweetActions.appendChild(likeButton);

  // Create dislike button and add event listener
  const dislikeButton = document.createElement('button');
  dislikeButton.classList.add('dislike-button');
  dislikeButton.innerHTML = '&#x1F44E;';
  dislikeButton.addEventListener('click', () => {
    dislikeButton.classList.toggle('disliked');
  });
  tweetActions.appendChild(dislikeButton);

  newTweet.appendChild(tweetActions);
  tweetList.prepend(newTweet);

  // Reset form and character counter
  tweetForm.reset();
  charCounter.innerText = '280';
  tweetButton.disabled = true;
});

// Add event listener to tweet input to update character counter
tweetInput.addEventListener('input', () => {
  const remainingChars = 280 - tweetInput.value.length;
  charCounter.innerText = remainingChars;
  tweetButton.disabled = (remainingChars < 0 || remainingChars === 280);
});
