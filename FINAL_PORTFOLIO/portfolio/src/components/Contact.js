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
    <div id="contact"
    className='OnePager'>
     <h2>contact</h2>
     <div id="form">
          <form onSubmit={handleSubmit(onSubmit)}>
     <label htmlFor="">E-mail:</label><input {...register('email')} rows="4"/> 
     
    <label htmlFor="">Message:</label> 
    <textarea name="" id="message" cols="30" rows="5"
     {...register('message', { required: true })} style={{height: "50%"}}></textarea>
   
      {errors.message && <p>Message is required.</p>}
      
      <input type="submit" action="manish.nepali@student.ehb.be"/>
    </form>
    </div>
    </div>
  );
}

export default Contact;
