import React from 'react';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FormContact() {

    const initialValues = { name: "", phone: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmitting(true);
    }

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            setSending(true);
            (emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formValues, process.env.REACT_APP_PUBLIC_KEY)
                .then(() => {
                    setFormValues(initialValues);
                    setIsSubmitting(false);
                    setSending(false);
                    toast.success('Mensaje enviado correctamente!', {
                        position: "bottom-right",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }).catch(err => {
                    setIsSubmitting(false);
                    toast.error(`Error al enviar el mensaje. (${err.status})`, {
                        position: "bottom-right",
                        autoClose: 2500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }));
        }
    }, [formErrors]);


    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Ingrese un nombre!';
        }

        if (!values.phone) {
            errors.phone = 'Ingrese un teléfono!';
        }

        if (!values.message) {
            errors.message = 'Ingrese un mensaje!';
        }

        return errors;
    }
    return (
        <>
            <form className="contact-data-form" onSubmit={handleSubmit}>
                <div className="contact-data-input">
                    <input type="text" placeholder=" Ingrese su nombre" name="name" value={formValues.name} onChange={handleChange} />
                </div>
                <p className='errorMessage'>{formErrors.name}</p>
                <div className="contact-data-input-number">
                    <input type="number" placeholder=" Ingrese su teléfono" name="phone" value={formValues.phone} onChange={handleChange} />
                </div>
                <p className='errorMessage'>{formErrors.phone}</p>
                <div className="contact-data-textarea">
                    <textarea rows="6" cols="80" name="message" placeholder=" Escriba algo" value={formValues.message} onChange={handleChange}></textarea>
                </div>
                <p className='errorMessage'>{formErrors.message}</p>
                <button className="contact-data-button" disabled={sending}>
                    {sending ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
            <ToastContainer />
        </>
    )
}
export default FormContact