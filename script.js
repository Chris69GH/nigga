document.addEventListener("DOMContentLoaded", function() {
    var optionsContainer = document.querySelector('.options');
    optionsContainer.addEventListener('click', function(event) {
        var target = event.target;
        if (target.classList.contains('yes-button')) {
            selectOption('yes');
        } else if (target.classList.contains('no-button')) {
            selectOption('no');
        }
    });
});

function selectOption(option) {
    var question = document.querySelector('.question');
    question.style.display = 'none'; // Hide the question
    var options = document.querySelector('.options');
    options.style.display = 'none'; // Hide the options

    var answerText = document.createElement('p');
    answerText.classList.add('answer');
    if (option === 'yes') {
        displayCatHeart();
        answerText.innerText = 'Thank you for being my Valentine!';
    } else if (option === 'no') {
        displayCatSad();
        answerText.innerText = "That's okay. Maybe next time!";
    } else {
        alert('Invalid option!');
    }
    document.querySelector('.text-container').appendChild(answerText);
}

function displayCatHeart() {
    var imageContainer = document.querySelector('.image-container');
    imageContainer.innerHTML = ''; // Clear existing content
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; 
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
    };
}

function displayCatSad() {
    var imageContainer = document.querySelector('.image-container');
    imageContainer.innerHTML = ''; // Clear existing content
    var catSadImage = new Image();
    catSadImage.src = 'sad-cat.gif'; 
    catSadImage.alt = 'Cat Sad';
    catSadImage.onload = function() {
        imageContainer.appendChild(catSadImage);
    };
}