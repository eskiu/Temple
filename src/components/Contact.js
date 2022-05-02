import React from 'react';
import { useState, useEffect } from 'react';
import credentials from '../credentials';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import phone from '../images/telephone.svg';
import wha from '../images/whatsapp.svg';
import mail from '../images/mail.svg';
import address from '../images/location-pointer.svg';
import ig from '../images/instagram.svg';
import fb from '../images/facebook.svg';

const center = { lat: -38.9589707, lng: -68.0701877 };

function Contact() {

    const initialValues = { name: "", phone: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true);
    }

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

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setIsSubmit(false);
            setFormValues(initialValues);
        }

    }, [formErrors]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: credentials.mapsKey
    })


    if (!isLoaded) {
        return <div>Loading...</div>;
    }


    return (

        <div id='contact' className="contact-container">
            <div className="contact-container-indeed">
                <div className="contact-map-container">
                    <div className="contact-map-title">
                        <h1>CONTACTO</h1>
                    </div>
                    <div className="contact-map-map">
                        <GoogleMap
                            center={center}
                            zoom={15}
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            options={{
                                streetViewControl: false
                            }}
                        >
                            <Marker position={center} />
                        </GoogleMap>
                    </div>
                </div>
                <div className="contact-data-container">
                    <div className="contact-data-data">
                        <div className="contact-data-items">
                            <div className="contact-data-item">
                                <div className="contact-data-item-icon">
                                    <img src={phone} alt="phone" />
                                </div>
                                <div className="contact-data-item-text">
                                    <p>+54 9 229 4425942</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-data-items">
                            <div className="contact-data-item">
                                <div className="contact-data-item-icon">
                                    <img src={wha} alt="whatsapp" />
                                </div>
                                <div className="contact-data-item-text">
                                    <p>+54 9 2295507220</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-data-items">
                            <div className="contact-data-item">
                                <div className="contact-data-item-icon">
                                    <img src={mail} alt="mail" />
                                </div>
                                <div className="contact-data-item-text">
                                    <p>ventas@templebienhecho.com.ar</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-data-items">
                            <div className="contact-data-item">
                                <div className="contact-data-item-icon">
                                    <img src={address} alt="address" />
                                </div>
                                <div className="contact-data-item-text">
                                    <p>Leguizamón Onésimo 345, Neuquén</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-data-items">
                            <div className="contact-data-item">
                                <div className="contact-data-item-icon">
                                    <img src={ig} alt="instagram" />
                                </div>
                                <div className="contact-data-item-text">
                                    <p>@templebienhecho</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-data-items">
                            <div className="contact-data-item">
                                <div className="contact-data-item-icon">
                                    <img src={fb} alt="facebook" />
                                </div>
                                <div className="contact-data-item-text">
                                    <p>@templebienhecho</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form className="contact-data-form" onSubmit={handleSubmit}>
                                <div className="contact-data-input">
                                    <input type="text" placeholder=" Ingrese su nombre" name="name" value={formValues.name} onChange={handleChange} />
                                </div>
                                <p className='errorMessage'>{formErrors.name}</p>
                                <div className="contact-data-input">
                                    <input type="number" placeholder=" Ingrese su teléfono" name="phone" value={formValues.phone} onChange={handleChange} />
                                </div>
                                <p className='errorMessage'>{formErrors.phone}</p>
                                <div className="contact-data-textarea">
                                    <textarea rows="6" cols="80" name="message" placeholder=" Escriba algo" value={formValues.message} onChange={handleChange}></textarea>
                                </div>
                                <p className='errorMessage'>{formErrors.message}</p>
                                <div className="contact-data-button">
                                    <button>Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact