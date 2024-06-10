import { Property } from './Property';

class House extends Property {
    constructor(address, price, description, images, bedrooms, bathrooms, garden) {
        super(address, price, description, images);
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.garden = garden;
    }

    hasGarden() {
        return this.garden ? 'Yes' : 'No';
    }
}

export { House };