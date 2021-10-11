import React, {Component, useState, useEffect} from 'react';
import Axios from 'axios';
import QuizVragen from '../quiz_vragen.json'

const fs = require("fs")

function DocentForm() {
    const[quiz, setQuiz] = useState({
        vraag : "",
        antwoord1 : "",
        antwoord2 : "",
        antwoord3 : ""

    });
 
 const postQuiz = () =>{
     const newQuiz={...quiz}
     newQuiz[postQuiz] = postQuiz.value;
     setQuiz(newQuiz);
     console.log(newQuiz);
   
 
 }
function handle(e) {
    const newQuiz = {...quiz}
    newQuiz[e.target.id] = e.target.value
    setQuiz(newQuiz)
    console.log(newQuiz)
}

// function submit(e) {
//     e.preventDefault();
//      Axios.post("/api", {
//         vraag : quiz.vraag,
//         antwoord1 : quiz.antwoord1,
//         antwoord2 : quiz.antwoord2,
//         antwoord3 : quiz.antwoord3
//     } )
//     .then(response =>{
//         console.log(response.quiz);
//         fs.appendFile("vragen.json",response.quiz.vraag)
//       })
// }


function submit(e){
    e.preventDefault();
    let JUIST_ANWOORD = document.querySelector('input[name="juisteantwoord"]:checked').value;
    localStorage.setItem("vraag",quiz.vraag);
    localStorage.setItem("antwoord1",quiz.antwoord1);
    localStorage.setItem("antwoord2",quiz.antwoord2);
    localStorage.setItem("antwoord3",quiz.antwoord3);
    localStorage.setItem("juiste_antwoord", JUIST_ANWOORD);
    // isTrue();
}

// function isTrue(){
//     let JUIST_ANWOORD ="";
//     if(document.getElementById('ant1').checked){
//         console.log(quiz.antwoord1);
//         JUIST_ANWOORD = quiz.antwoord1;
//     }else if(document.getElementById('ant2').checked){
//         console.log(quiz.antwoord2);
//         JUIST_ANWOORD = quiz.antwoord2;
//     }else{
//         console.log(quiz.antwoord3);
//         JUIST_ANWOORD = quiz.antwoord3;
//     }
// }


    return(
        <div class="quiz_form">
      

            <form onSubmit={(e)=> submit(e)}>
                
            <input onChange={(e) => handle(e)} id="vraag" value={quiz.vraag} placeholder="voeg de vraag toe" type="text"/>
            <span class="radio_btn">
            <input type="radio" name="juisteantwoord" id="ant1" value={quiz.antwoord1}  checked={true}/>
                <input onChange={(e) => handle(e)} id="antwoord1" value={quiz.antwoord1} placeholder="voeg een antwoord toe" type="text"/>
                </span>
                <span class="radio_btn">
                <input type="radio" name="juisteantwoord" id="ant2" value={quiz.antwoord2}/>

                <input onChange={(e) => handle(e)} id="antwoord2" value={quiz.antwoord2} placeholder="voeg een antwoord toe" type="text"/>
                </span>
                <span class="radio_btn">
                <input type="radio" name="juisteantwoord" id="ant3" value={quiz.antwoord3}/>

                <input onChange={(e) => handle(e)} id="antwoord3" value={quiz.antwoord3} placeholder="voeg een antwoord toe" type="text"/>
                </span>
            </form>
            <button class="submit" onClick={submit}>submit</button>
        </div>
    )
}



export default DocentForm;