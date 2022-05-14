
let currentQuestion = 0;
let currentScore = 0; 

let resultContainer = document.querySelector('#result-container');
const questionContainer = document.querySelector('#question-container');
const choiceContainer = document.querySelector('#choice-container');
const answerContainer = document.querySelector('#answer-container');

document.getElementById('myButton').style.visibility = "hidden";



function startQuiz(){
    document.getElementById('btn').style.visibility = "hidden";
    document.getElementById('info').style.visibility = "hidden";
   
    return displayQuestion();
    

}


var questions = [
    
    {
        question: "1. ALL Asian-American communities share the same values and culture",
        choices: ["A. Absolutely", 
        "B. No??"], 
  
        answer: "A. Absolutely"},  
    {
        question: "2. As of 2019, what is the total population of Asians in the U.S.?",
        choices: ["A. 10%", 
        "B. 2%", 
        "C. 23%",
        "D. 7%"],
        answer: "D. 7%"},
    {
        question: "3. In the 18th century, which Asian/Pacific Islander group was the first to settle in the U.S?",
        choices: ["A. Filipinos", 
        "B. Japanese", 
        "C. Chinese",
        "D. Samoans"],
        answer: "A. Filipinos"},
    {
        question: "4. What was the first Asian ethnic group to immigrate to the US?",
        choices: ["A. Korean", 
        "B. Chinese", 
        "C. Vietnamese",
        "D. Indians"],
        answer: "B. Chinese"},

        {
            question: "5. Did you ever have to learn an instrument?",
            choices: ["A. ..yes", 
            "B. nope",
        "C. yes but I chose to do it on my own"], 
        
      
            answer: "A.  ..yes"},  
        {
            question: "6. You're incredibly disappointed in your grade, what was it?",
            choices: ["A. 10%", 
            "B. 2%", 
            "C. 23%",
            "D. 7%"],
            answer: "D. 7%"},
        {
            question: "7. Which of the following is NOT a Southeast Asian country?",
            choices: ["A. Malaysia", 
            "B. Japan", 
            "C. the Philippines",
            "D. Indonesia"],
            answer: "B. Japan"},
        {
            question: "8. What are your thoughts on wearing shoes in the house?",
            choices: ["A. Korean", 
            "B. Chinese", 
            "C. Vietnamese",
            "D. Indians"],
            answer: "B. Chinese"},
            {
                question: "9. Can you speak your dialect fluently? ",
                choices: ["A. Malaysia", 
                "B. Japan", 
                "C. the Philippines",
                "D. Indonesia"],
                answer: "B. Japan"},
            {
                question: "10.Do you know the most common language spoken throughout China?",
                choices: ["A. Mandarin", 
                "B. Shanghainese", 
                "C. Cantonese",
                "D. English"],
                answer: "A. Mandarin"}

];

function displayQuestion() {
    if (currentQuestion === questions.length) {
        endQuiz();
    } else {
        questionContainer.innerHTML = '';
        choiceContainer.innerHTML = '';
        document.body.style.background = 'transparent';
        let h5Question = document.createElement('h5');
        h5Question.className = 'list-group-item list-group-item-action list-group-item-danger .disabled';
        h5Question.innerHTML = questions[currentQuestion].question;
        questionContainer.appendChild(h5Question);

        for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
            var btnChoices = document.createElement('button');
            btnChoices.innerHTML = '';
            btnChoices.className = 'list-group-item list-group-item-action';
            btnChoices.innerHTML = questions[currentQuestion].choices[i];
            choiceContainer.appendChild(btnChoices);
            btnChoices.onclick = checkAnswer;
        }
    }
}

function checkAnswer() {
    if (this.textContent !== questions[currentQuestion].answer) {
        console.log(this)
       
        setTimeout(nextQuestion,500);
    } else {
        currentScore = currentScore + 1;
      
        setTimeout(nextQuestion,500);
        // nextQuestion();
    }
}
   
function nextQuestion() {
    ++currentQuestion;
    displayQuestion(); 
}

function endQuiz() {
    choiceContainer.innerHTML = '';
    // choiceContainer.innerHTML = 'The term Asian American is one that encompasses a wide spectrum of communities with different cultural backgrounds and experiences. Asian Americans range from East Asians, South Asians, Southeast Asians, and Pacific Islanders. Not many people are aware of the complexity behind the term. Despite it being such a big community, many of us still feel alienated or have a sense of imposter syndrome within our respective communities. This raises the question I’ve always asked myself, what does it mean to be Asian? What makes me proud to be Asian? I hope this portion of the tool helps bring a sense of comfort, community, and belonging to those that might feel lost and alone. ';
    clearInterval(timeinterval);


    questionContainer.innerHTML = 'How would you describe your experience as an Asian American';
   
    document.body.style.background = 'transparent';
    let retakeBtn = document.createElement('button');
    let saveBtn = document.createElement('button');
    let inputName = document.createElement('input');
    let displayResult = document.createElement('div'); 
    let displayText = document.createElement('div'); 
  
    // displayText.innerHTML = 'How would you describe your experience as an Asian American';
  
    inputName.setAttribute("placeholder", "");
    inputName.className = 'm-3 lg pt-2 pb-2';
    saveBtn.className = 'btn';
    saveBtn.innerHTML = 'save';
    retakeBtn.className = 'btn btn-outline-dark mr-3 ml-3 mb-3';
    retakeBtn.id = "retakeButton";
    retakeBtn.innerHTML = 'Retake Quiz';
    displayResult.className = 'text-center ';
    displayResult.innerHTML = `You got ${currentScore} out of ${questions.length} questions correct!`;
   
    if(currentScore == questions.length) {

        
        resultContainer.appendChild(inputName);
        resultContainer.appendChild(saveBtn);
        resultContainer.appendChild(displayResult);
        questionContainer.appendChild(displayText);
        // document.body.style.background = "url('images/giphyRight.gif')";
    } else {

        resultContainer.appendChild(inputName);
        resultContainer.appendChild(saveBtn);
        resultContainer.appendChild(displayResult);  
        resultContainer.appendChild(displayText);
        // document.body.style.background = "url('images/giphyWrong.gif')"; 
    }
    let tryBtn = document.getElementById('myButton').style.visibility = "visible";
   
    saveBtn.addEventListener("click", function(){

  addText()

    })

    function addText (){
  
        localStorage.setItem("save",inputName.value,currentScore);
    }

}



document.addEventListener('click',function(e){
    if(e.target && e.target.id == 'retakeButton'){
        reloadApp();
     }
 });

function reloadApp(){
    window.location.reload();
}


var timeinterval;


