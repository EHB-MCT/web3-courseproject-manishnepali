function DocentForm() {
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

                <input type="submit" value="submit question" class="submit"/>
            </form>
        </div>
    )
}
export default DocentForm;