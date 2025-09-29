


registerButtons()


function registerButtons() {

    document.getElementById("quiz-container").querySelectorAll(".question-block").forEach(qBlock => {
        qBlock.querySelectorAll('.answer-btn').forEach(button => {
            button.addEventListener('click', () => {
                selectAnswer(qBlock, button);
            })
        })
    })
    document.querySelectorAll('.btn-success').forEach(button => {
        button.addEventListener('click',() => {
            submit(button);
        })
    })
}

function selectAnswer(parent,button) {

    parent.querySelectorAll('.answer-btn').forEach(otherButton => {
        otherButton.classList.remove('unanswered');
        otherButton.classList.remove('selected')
        otherButton.classList.add('not-selected')
    })
    button.classList.remove('not-selected')
    button.classList.add('selected')
}



function submit() {
    const REL_ZERO = "A".charCodeAt(0)
    let quizContainer = document.getElementById('quiz-container')
    let answerContainer = document.getElementById('result-container')
    if(quizContainer.getElementsByClassName('unanswered').length > 0) {
        window.alert("Please answer all questions before submitting!")
        return
    }

    let answerSum = 0
    for(let element of quizContainer.getElementsByClassName("selected")) {
        answerSum += element.getAttribute('data-answer').charCodeAt(0) - REL_ZERO + 1
    }

    quizContainer.style.display = "none"
    answerContainer.style.display = "flex"

    const EXTROVERT_LOWER_BOUND =  15
    const INTROVERT_UPPER_BOUND = 10
    //Default, is an ambivert
    let text = "Your test results show you being an ambivert! Ambiverts are a mix between introverts and extroverts, sharing characteristics of both. You can have fun on your own, but you know how to party when you are in the mood!"
    //Is an extrovert
    if(answerSum > EXTROVERT_LOWER_BOUND) {
        text = "Your test results show you being an extravert! Extroverts are incredibly social people, unafraid of new people or experiences. Extraverts have a hard time being alone, but thrive in the company of others! "
    }
    //Is an introvert
    else if(answerSum < INTROVERT_UPPER_BOUND) {
        text = "Your test results show you being an introvert! Introverts know how to be alone, and often they own it! Introverts struggle with large groups of people, and often find it difficult to start or maintain social interactions, especially with those unfamiliar to them"
    }



    document.getElementById("result-text").innerText = text
}