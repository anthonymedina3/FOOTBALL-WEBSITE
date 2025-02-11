const Questions = [
    {
        q: "Fill in the blank: There Are A Total Of _____ NFL Teams.",
        a: [{text: "31", isCorrect: false},
            {text: "22", isCorrect: false},
            {text: "32", isCorrect: true},
            {text: "23", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: NFL Stands For _____.",
        a: [{text: "Nation Footbal League", isCorrect: false},
            {text: "Newest Football League", isCorrect: false},
            {text: "National Football Leg", isCorrect: false},
            {text: "National Football League", isCorrect: true},
           ]
    },
    {
        q: "Fill in the blank: There are a total of _____ positions in the nfl.",
        a: [{text: "61", isCorrect: true},
            {text: "54", isCorrect: false},
            {text: "38", isCorrect: false},
            {text: "45", isCorrect: false},
           ]
    },
    {
        q: "Fill in the blank: NFL Fought Aganist The _____ For Americas Best Football Leauge.",
        a: [{text: "UFL", isCorrect: false},
            {text: "CFL", isCorrect: false},
            {text: "AFL", isCorrect: true},
            {text: "NAFL", isCorrect: false},
           ]
    },
    
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
