import React from 'react';
import FormContact from './FormContact';
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
                            <FormContact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact