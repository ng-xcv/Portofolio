import "./contact.scss";
import { useState } from "react";

const Contact = () => {
   const [message, setMessage] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
   };
   return (
      <div className="contact" id="contact">
         <div className="left">
            <img src="assets/shake.svg" alt="" />
         </div>

         <div className="right">
            <h2>Contact.</h2>
            <form onSubmit={handleSubmit}>
               <input type="email" placeholder="Email" />
               <textarea placeholder="Message"></textarea>
               <button type="submit" onClick={() => setMessage(true)}>
                  Send
               </button>
               {message && <span>Thanks, I'll reply ASAP :)</span>}
            </form>
         </div>
      </div>
   );
};

export default Contact;
