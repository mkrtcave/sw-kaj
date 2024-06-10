import {useEffect, useState} from "react";
import {House} from '../models/House';
import {Apartment} from '../models/Apartment';
import Slider from 'react-slick';

const OnSalePage = () => {
    const [properties, setProperties] = useState([]);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        fetch('./properties.json')
            .then(response => response.json())
            .then(data => {
                // Create instances of House and Apartment subclasses from the fetched data
                const propertyInstances = data.map(propertyData => {
                    if (propertyData.type === 'House') {
                        return new House(
                            propertyData.address,
                            propertyData.price,
                            propertyData.description,
                            propertyData.images,
                            propertyData.bedrooms,
                            propertyData.bathrooms,
                            propertyData.garden
                        );
                    } else if (propertyData.type === 'Apartment') {
                        return new Apartment(
                            propertyData.address,
                            propertyData.price,
                            propertyData.description,
                            propertyData.images,
                            propertyData.bedrooms,
                            propertyData.bathrooms,
                            propertyData.floor
                        );
                    } else {
                        return null;
                    }
                }).filter(property => property !== null);

                setProperties(propertyInstances);
            })
            .catch(error => console.error('Error fetching properties:', error));
    }, []);

    return (
        <div className="property-container">
            {/*<h1>Properties for Sale</h1>*/}
            {properties.map((property, index) => (
                <div key={index} className="property-card">
                    <h2>Property {index + 1}</h2>
                    <p>Address: {property.address}</p>
                    <p>Price: ${property.price}</p>
                    <p>Description: {property.description}</p>
                    {property instanceof House && (
                        <div>
                            <p>Bedrooms: {property.bedrooms}</p>
                            <p>Bathrooms: {property.bathrooms}</p>
                            <p>Has Garden: {property.hasGarden()}</p>
                        </div>
                    )}
                    {property instanceof Apartment && (
                        <div>
                            <p>Bedrooms: {property.bedrooms}</p>
                            <p>Bathrooms: {property.bathrooms}</p>
                            <p>Floor: {property.getFloor()}</p>
                        </div>
                    )}
                    {/*<div className>{property.images.item(0)}</div>*/}
                    <Slider {...sliderSettings} className="property-card-slider">
                        {property.images.map((image, imageIndex) => (
                            <div key={imageIndex} className="property-card-slide">
                                <img src={`${image}`} alt={`Property ${index + 1} Image ${image}`}
                                     className="property-image"/>
                            </div>
                            // <div key={imageIndex} className="property-card-slide"
                            //      style={{backgroundImage: `url("${image}")`}}>
                            //     {/*<img src={`${image}`} alt={`Property ${index + 1} Image ${image}`} />*/}
                            // </div>
                        ))}
                    </Slider>
                </div>
            ))}
        </div>
    )
        ;
};

export default OnSalePage;