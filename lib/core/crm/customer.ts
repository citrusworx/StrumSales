class Customer {
    private id: number;
    private name: {
        first: string;
        last: string;
        middle?: string; // Optional middle name
        title?: string; // Optional title (Mr., Mrs., etc.)
    };
    private email: string;
    private phone: string;
    private address: string;
    private isLoyaltyMember: boolean;
    private loyaltyCardNumber: string;
    private loyaltyPoints: number;
    private purchaseHistory: any[]; // Placeholder for purchase history
    private wishlist: any[]; // Placeholder for wishlist items
    private isStudent: boolean;
    private studentId: string;
    private studentDiscount: number;
    private isEmployee: boolean;
    private employeeId: string;
    private employeeDiscount: number;

    constructor(){

    }

    // Getters and Setters
    getCustomerName() {
        return this.name.first + ' ' + this.name.last;
    }

}