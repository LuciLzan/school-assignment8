


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
    let text = "AMBIVERT_RESULT"
    //Is an extrovert
    if(answerSum > EXTROVERT_LOWER_BOUND) {
        text = "EXTROVERT_RESULT"
    }
    //Is an introvert
    else if(answerSum < INTROVERT_UPPER_BOUND) {
        text = "INTROVERT_RESULT"
    }

    document.getElementById("result-text").innerText = text
}