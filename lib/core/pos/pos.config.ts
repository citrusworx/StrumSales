interface PoSConfig {
    curreny: string;
    currencySymbol: string;
    taxRate: number;
    taxIncluded: boolean;
    taxName: string;
    taxLabel: string;
    taxLabelPlural: string;
    taxLabelShort: string;
    taxLabelPluralShort: string;
    terminals: string[];
    defaultTerminal: string;
    enableLogin: boolean;
    enableLogout: boolean;
    enableRegister: boolean;
    enableCheckout: boolean;
    enableRefund: boolean;
    enableDiscount: boolean;
    enableGiftCard: boolean;
}



const config: PoSConfig = {
    curreny: 'USD',
    currencySymbol: '$',
    taxRate: 0.07,
    taxIncluded: false,
    taxName: 'Tax',
    taxLabel: 'Tax',
    taxLabelPlural: 'Taxes',
    taxLabelShort: 'T',
    taxLabelPluralShort: 'Txs',
    terminals: ['Terminal 1', 'Terminal 2'],
    defaultTerminal: 'Terminal 1',
    enableLogin: true,
    enableLogout: true,
    enableRegister: true,
    enableCheckout: true,
    enableRefund: true,
    enableDiscount: true,
    enableGiftCard: true,
}