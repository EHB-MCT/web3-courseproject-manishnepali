import '../App.css';
import { useForm } from 'react-hook-form';

function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {alert(`email: ${data.email}, message: ${data.message} `)};

  return (
    <div id="contactpage"
    className='OnePager'>
   
     <h1 style={{marginLeft: "40%"}}>contact</h1>
     <div id="contact">
     <div id="form">
          <form onSubmit={handleSubmit(onSubmit)}>
     <label htmlFor="">E-mail:</label><input {...register('email')} rows="4"/> 
     
    <label htmlFor="">Message:</label> 
    <textarea name="" id="message" cols="30" rows="5"
     {...register('message', { required: true })} style={{height: "50%"}}></textarea>
   
      {errors.message && <p>Message is required.</p>}
      
      <input type="submit" />
    </form>
    </div>
    <div id="socials">
    <li class='projectItem'
           style={{background: ""}}>
             
             <a href="https://twitter.com/manishnepalibxl" target="_blank">  <img src="https://www.watervrienden-assen.nl/wp-content/uploads/2015/12/Twitter-icon.png"
             style={{width: "40%"}} alt="" />
             </a>
             <p style={{float:"right", color: 'black'}}>twitter</p>
           </li>
     <li class='projectItem'
           style={{background: "geadient(#fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"}}>
             
             <a href="https://www.instagram.com/chiso.portfolio/" target="_blank">  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
             style={{width: "40%"}} alt="" />
             </a>
             <p style={{float:"right", color: 'black'}}>instagram</p>
           </li>
           
           <li class='projectItem'
           style={{background: ""}}>
             
             <a href="https://www.linkedin.com/in/manish-nepali-8000a6177/" target="_blank">  <img src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png"
             style={{width: "40%"}} alt="" />
             </a>
             <p style={{float:"right", color: 'black'}}>linkedin</p>
           </li>



    </div>
    </div>
    </div>
  );
}

export default Contact;
