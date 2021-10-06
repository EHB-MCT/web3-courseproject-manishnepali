import React, {Component, useState, useEffect} from 'react';
import Axios from 'axios';
import QuizVragen from '../quiz_vragen.json'
function DocentForm() {
    const[quiz, setQuiz] = useState("");
 
 const postQuiz = () =>{
     Axios.post(QuizVragen)
     .then((response)=>{
      
        console.log(response.data);
        setQuiz(response.data);
     })
 
 }

    return(
        <div class="quiz_form">
      

            <form action="">
                <h3>Vraag</h3>
                <input type="text" />
                <h3>Antwoord 1</h3>
                <input type="text" /><span class="radio_btn"><input type="radio" name="" class="radio" /> <p> select if this is the right awnser </p></span>

                <h3>Antwoord 2</h3>
       
                <input type="text" /><span class="radio_btn"><input type="radio" name="" class="radio" /> <p> select if this is the right awnser </p></span>

                <h3>Antwoord 3</h3>
                
                <input type="text" /><span class="radio_btn"><input type="radio" name="" class="radio" /> <p> select if this is the right awnser </p></span>

            </form>
            <button class="submit" onClick={postQuiz}>submit</button>
        </div>
    )
}
export default DocentForm;