import credentials from '../credentials';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

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
                        <div className="contact-data-title">
                        </div>
                        <div className="contact-data-form">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact