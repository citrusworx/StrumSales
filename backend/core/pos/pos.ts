class PoS {
    private cart: any[]; // Placeholder for cart items
    private paymentMethod: string; // Placeholder for payment method
    private totalAmount: number; // Placeholder for total amount
    private transactionId: string; // Placeholder for transaction ID
    private receiptNumber: number;
    private orderType: string; // Placeholder for order type (online/in-store)
    constructor() {
        this.init();
    }
    
    init() {
        console.log('Initializing Point of Sale system...');
        // Initialize the system, load configurations, etc.
    }
    
    startTransaction() {
        console.log('Starting a new transaction...');
        // Logic to start a new transaction
        // Establish cart object and set listeners etc...
        // Check to see if customer has a loyalty card and apply any discounts
    }
    
    processPayment(amount) {
        console.log(`Processing payment of $${amount}...`);
        // Logic to process payment
    }
    
    endTransaction() {
        console.log('Ending the transaction...');
        // Logic to end the transaction
    }
    generateTransactionId() {
        if(this.orderType === 'online'){
            this.transactionId = Math.random().toString(36).substring(2, 15); // Random string as transaction ID
        }
        else if(this.orderType === 'in-store'){
            this.transactionId = Math.floor(Math.random() * 1000000).toString(); // Random number as transaction ID
        }
        else {
            console.error('Invalid order type. Cannot generate transaction ID.');
            return;
        }                                                                                 
    }
}