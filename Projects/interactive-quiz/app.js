//creating an array of correct answers
const correctAnswers = ['B','B','A','B','A'];

//attaching an event listener to the form
const form = document.querySelector(".quiz-form");

const result = document.querySelector(".result");


form.addEventListener('submit',e=>{
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value,form.q5.value];

    //checking answers
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score += 20;
        }
    });

    //console.log(score);
    window.scrollTo({top:0,behavior:"auto"});
    result.querySelector('span').textContent=`${score}%`;
    result.classList.remove("d-none");

    let output=0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent=`${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    },15);
});

