class Product {
    private id: number;
    private name: string;
    private description: string;
    private category: string;
    private brand: string;
    private price: number;
    private discountedPrice: number;
    private sku: string;
    private stock: number;
    private stockStatus: string;
    private featuredImage: string;
    private images: string[];
    private attributes: Record<string, string>;
    private tags: string[];

    constructor(){
        console.log('Initializing Product...');
        // Check to see latest product id from database and set it to next if there is no product in the database
        // Set id to 1 if there is no product in the database
    }

    // Getters and Setters
    getProductName() {
        return this.name;
    }

    changeName(name: string) {
        this.name = name;
    }

    getProductDescription() {
        return this.description;
    }

    changeDescription(description: string) {
        this.description = description;
    }

    getProductCategory() {
        return this.category;
    }

    changeCategory(category: string) {
        this.category = category;
    }
}
