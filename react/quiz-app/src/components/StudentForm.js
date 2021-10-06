import React, {Component, useState, useEffect} from 'react';
import Axios from 'axios';
import QuizVragen from '../quiz_vragen.json'
function StudentForm() {

    return(
     
        <div class="quiz_form">
            {QuizVragen.map(vraag =>{
            return ( <div>
                <h1> {vraag.vraag} </h1>
                <form>
                <span class="radio_btn">
                <input type="radio" name="" id="" /> <p >{vraag.antwoord1} </p>
                </span>
                <span class="radio_btn">
                <input type="radio" name="" id="" /> <p>{vraag.antwoord2}</p>
                </span>
                <span class="radio_btn">
                <input type="radio" name="" id="" /> <p>{vraag.antwoord3}</p>
                </span> 
                </form>
                </div> )})} 
          
            <button class="submit">
                    submit</button>
        </div>
    )
}
export default StudentForm;