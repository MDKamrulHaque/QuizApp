const questData = [

{
  question: 'How To Kill The Boss Monster?',

    a: 'Healing Magic',
    b: 'Fully Charged Finishing Move',
    c: 'Run Away',
    d: 'Let Him Kill You',

    correct: 'b'
},

 {

  question:'Who is Kira?',

  a: 'He is also know as Light Yagami',
  b: 'Dont Know, Dont Care',
  c: 'The MC from SAO',
  d: 'He is the villain from SAO',

  correct: 'a'

},

{

  question: 'Who is Luffy?',

  a: 'The MC from One Piece',
  b: 'He is also know as Ace',
  c: 'Dont Know, Dont Care',
  d: 'He is the villain from SAO',

  correct: 'a'

},


{
  question: 'Who is Goku?',

  a: 'He is the villain from Yu-Gi-OH!',
  b: 'He is also know as Vegita',
  c: 'Dont Know, Dont Care',
  d: 'The MC from Dragon Ball series',

  correct: 'd'

},

{

  question: 'What does COD stands for?',
  a: 'Call Of Dance',
  b: 'Call Out Day',
  c: 'Call Of Duty',
  d: 'Call Of Death',

  correct: 'c'

}
];

const quiz = document.getElementById ("quiz");
const questEl = document.getElementById("quest");
const answersEls = document.querySelectorAll(".answer");
const quest_a = document.getElementById('quest_a');
const quest_b = document.getElementById('quest_b');
const quest_c = document.getElementById('quest_c');
const quest_d = document.getElementById('quest_d');
const loadItBtn = document.getElementById('load It')


let currentQuest = 0;
let score = 0;


loadQuest();



function loadQuest() {

  deselectAnswers ();

  const currentQuestData = questData[currentQuest];

  questEl.innerText = currentQuestData.question;

  quest_a.innerText = currentQuestData.a;
  quest_b.innerText = currentQuestData.b;
  quest_c.innerText = currentQuestData.c;
  quest_d.innerText = currentQuestData.d;

}

function getSelected(){

  let answer = undefined;

  answersEls.forEach((answerEl) =>{

    if (answerEl.checked) {

    answer = answerEl.id;

    }

  });

return answer;


}

 function deselectAnswers (){

   answersEls.forEach((answerEl) =>{
   answerEl.checked = false;

   });
 }

// check to see answer
loadItBtn.addEventListener("click", () => {

  const answer = getSelected();

console.log(answer);


if (answer) {
    if (answer === questData[currentQuest].correct) {
        score++;
    }

  currentQuest++;
  if (currentQuest < questData.length){

      loadQuest();
     } else {

       quiz.innerHTML = `

       <h2> You Have Succsessfully Completed  ${score} /${questData.length} Quests </h2>

        <button onclick="location.reload()">Play Quest Again</button>

       `;

     }

}

});
