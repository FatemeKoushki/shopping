"use client"
import React, { useRef } from 'react';  
import emailjs from 'emailjs-com';  
import toast from 'react-hot-toast';

const ContactForm: React.FC = () => {  
    const form = useRef<HTMLFormElement>(null);  

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {  
        e.preventDefault();  

        if (form.current) {  
            emailjs.sendForm('service_o8zqmtg', 'template_gpzz0jv', form.current, 'u-Od2S6oCGrFRFSFU')  
                .then(() => {  
                    toast.success("Message sent successfully")
                    form.current?.reset(); 
                }, (error) => {  
                    console.log(error.text);  
                    alert("There was a problem sending the email");  
                });  
        }  
    };  

    return (  
        <form ref={form} onSubmit={sendEmail} className='overflow-x-hidden flex flex-col max-w-md  rounded-md  mx-auto mt-5 gap-1 p-6 md:border'>  
            <label>Name</label>  
            <input type="text" name="user_name" required  className='border p-1'/>  
            <label>Email</label>  
            <input type="email" name="user_email" required className='border p-2' />  
            <label>Message</label>  
            <textarea name="message" required  className='border p-3 min-h-52 h-auto'/>  
            <button type="submit" className='bg-primeColor text-white p-1 rounded-md mt-3' >Send</button>  
        </form>  
    );  
};  

export default ContactForm;