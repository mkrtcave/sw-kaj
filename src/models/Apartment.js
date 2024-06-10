import { Property } from './Property';

class Apartment extends Property {
    constructor(address, price, description, images, bedrooms, bathrooms, floor) {
        super(address, price, description, images);
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.floor = floor;
    }

    // Method specific to apartments
    getFloor() {
        return this.floor;
    }
}

export {Apartment};