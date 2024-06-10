class Property {

    constructor(address, price, description, images) {
        this.address = address;
        this.price = price;
        this.description = description;
        this.images = images;
    }

    updatePrice(newPrice) {
        this.price = newPrice;
    }

    addImage(imageUrl) {
        this.images.push(imageUrl);
    }

    displayDetails() {
        console.log(`Address: ${this.address}`);
        console.log(`Price: $${this.price}`);
        console.log(`Description: ${this.description}`);
        console.log('Images:');
        this.images.forEach((image, index) => {
            console.log(`Image ${index + 1}: ${image}`);
        });
    }
}

export { Property };