import React, {Component, useState, useEffect} from 'react';
import Axios from 'axios';
import QuizVragen from '../quiz_vragen.json'



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

function submit(e) {
    e.preventDefault();
    let JUIST_ANWOORD = document.querySelector('input[name="juisteantwoord"]:checked').value;
    // Axios.get("/api").then(function(response){
    //     console.log(response);
    // });
     Axios.post("/quiz", {
        "vraag" : quiz.vraag,
        "antwoord1" : quiz.antwoord1,
        "antwoord2" : quiz.antwoord2,
        "antwoord3" : quiz.antwoord3
    } )
    .then(response =>{
        console.log(response.quiz);
      })
}






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