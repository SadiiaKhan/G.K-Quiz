let quiz = [
    {
        question: "1.Which is the longest Surah of Holy Quran?",
        opt1: "Surah Waqia",
        opt2: "Surah Baqra",
        opt3: "Surah Fatiha",
        coropt: "Surah Baqra"
    },

    {
        question: "2.Which animal is known as the `Ship of the Desert`?",
        opt1: "Giraffe",
        opt2: "Camel",
        opt3: "Lion",
        coropt: "Camel"
    },

    {
        question: "3.Pakistan Defence day is celebrated as a?",
        opt1: "National Day",
        opt2: "Republic Day",
        opt3: "Armed Force Day",
        coropt: "National Day"
    },

    {
        question: "4.How many surah are in Holy Quran?",
        opt1: "246",
        opt2: "674",
        opt3: "114",
        coropt: "114"
    },

    {
        question: "5.How many minutes are there in an hour?",
        opt1: "741 minutes",
        opt2: "60 minutes",
        opt3: "3600 minutes",
        coropt: "60 minutes"
    },

    {
        question: "6.What nutrient is responsible for building and repairing body issues?",
        opt1: "Carbohydrates",
        opt2: "Proteins",
        opt3: "Fats",
        coropt: "Proteins"
    },

    {
        question: "7.What is the average recommanded sleep duration for adult?",
        opt1: "8 hours",
        opt2: "10 hours",
        opt3: "4 hours",
        coropt: "8 hours"
    },

    {
        question: "8.Who was the first wife of the Prophet Muhammad (PBUH)?",
        opt1: "Aisha (R.A)",
        opt2: "Asma (R.A)",
        opt3: "Khadija (R.A)",
        coropt: "Khadija (R.A)"
    },

    {
        question: "9.Which of the following is a risk factor for heart disease?",
        opt1: "Smoking",
        opt2: "Normal blood presure",
        opt3: "Healthy diet",
        coropt: "Smoking"
    },

    {
        question: "10.Which of the following is a symptom of stress?",
        opt1: "Increased appetite",
        opt2: "Dry Skin",
        opt3: "Rapid heartbeat",
        coropt: "Rapid heartbeat"
    },

]

let ques = document.querySelector("#ques")
let opt1 = document.querySelector("#opt1")
let opt2 = document.querySelector("#opt2")
let opt3 = document.querySelector("#opt3")
let btn = document.querySelector("button")
let getoptions = document.querySelectorAll("input")
// getoptions[0],
let idx = 0;
let score = 0;
next();

function next() {
    for (let i = 0; i < getoptions.length; i++) {
        if (getoptions[i].checked) {
            let seloptvalue = getoptions[i].value
            //console.log(seloptvalue)
            let selectedques = quiz[idx - 1][`question`]
            //console.log(selectedques)
            let selectedopt = quiz[idx - 1][`opt${seloptvalue}`]
            //console.log(selectedopt)
            let correctopt = quiz[idx - 1][`coropt`]
            //console.log(correctopt)
            if (selectedopt == correctopt) {
                score++
            }
        }
        getoptions[i].checked = false
    }
    if (idx > quiz.length - 1) {
        alert(`Your Score Is ${score}/${quiz.length}`)
        score = 0;
        idx = 0;
        next();
    }
    else {
        ques.innerText = quiz[idx].question
        opt1.innerText = quiz[idx].opt1
        opt2.innerText = quiz[idx].opt2
        opt3.innerText = quiz[idx].opt3
        idx++;
    }
}

function cl() {
    btn.disabled = false   // button enable
}