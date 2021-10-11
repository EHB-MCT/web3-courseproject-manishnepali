import React, {Component, useState, useEffect} from 'react';
import Axios from 'axios';
import QuizVragen from '../quiz_vragen.json'
function StudentForm() {
    let point = 0;
    function submit(e){
        const juist = localStorage.getItem('juiste_antwoord');
        let antwoord_radio = document.querySelector('input[name="antwoordq"]:checked').value;
        console.log(juist, antwoord_radio);
    
        if(juist === antwoord_radio){
            console.log('plus1');
            point += 1;
            console.log(point);
        }else{
            console.log('plus1');
            point -= 1;
            console.log(point);
        }
    }
    return(
     
        <div class="quiz_form">
            {QuizVragen.map(vraag =>{
            return ( <div>

                <h1> {localStorage.getItem("vraag")} </h1>
                <form>
                <span class="radio_btn">
                <input type="radio" name="antwoordq" id="antwoord1" value={localStorage.getItem("antwoord1")} /> <p>{localStorage.getItem("antwoord1")}</p>

                {/* <input type="radio" name="" id="" /> <p >{vraag.antwoord1} </p> */}
                </span>
                <span class="radio_btn">
                <input type="radio" name="antwoordq" id="antwoord2" value={localStorage.getItem("antwoord2")}/> <p>{localStorage.getItem("antwoord2")}</p>

                {/* <input type="radio" name="" id="" /> <p>{vraag.antwoord2}</p> */}
                </span>
                <span class="radio_btn">
                <input type="radio" name="antwoordq" id="antwoord3" value={localStorage.getItem("antwoord3")}/> <p>{localStorage.getItem("antwoord3")}</p>

                {/* <input type="radio" name="" id="" /> <p>{vraag.antwoord3}</p> */}
                </span> 
                </form>
                </div> )})} 
          
            <button class="submit" onClick={submit}>
                    submit</button>
        </div>
    )
}
export default StudentForm;