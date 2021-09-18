import { createStore } from 'vuex';

export default createStore({
  state: {
    invoiceDatabase: [
      {
        invoiceId: 4345,
        invoiceStatus: 'Pending',
        invoiceDate: new Date('2021-04-12').toLocaleDateString(),
        clientName: 'Norbert',
        clientEmail: 'norbert@abc.com',
        clientStreetAddress: 'Wall Street 5/3',
        clientCity: 'Paris',
        clientZipCode: 65152,
        clientCountry: 'France',
        clientNote: 'Please use strong package.',
        paymentTerms: '30days',
        paymentDate: new Date('2021-05-12').toLocaleDateString(),
        productsList: [
          {
            itemId: 101,
            itemName: 'Black Paint',
            itemQuantity: 5,
            unitPrice: 4.99,
            itemTotal: 24.95,
          },
          {
            itemId: 102,
            itemName: 'Yellow Paint',
            itemQuantity: 3,
            unitPrice: 4.99,
            itemTotal: 14.97,
          },
        ],
        invoiceTotal: 39.92,
      },
      {
        invoiceId: 4346,
        invoiceStatus: 'Paid',
        invoiceDate: new Date('2021-03-12').toLocaleDateString(),
        clientName: 'Justyna',
        clientEmail: 'justyna@abc.com',
        clientStreetAddress: 'Wood Street 1/2',
        clientCity: 'Madrid',
        clientZipCode: 12178,
        clientCountry: 'Spain',
        clientNote: 'Please use eco package.',
        paymentTerms: '60days',
        paymentDate: new Date('2021-05-11').toLocaleDateString(),
        productsList: [
          {
            itemId: 101,
            itemName: 'Black Paint',
            itemQuantity: 1,
            unitPrice: 4.99,
            itemTotal: 4.99,
          },
          {
            itemId: 102,
            itemName: 'Yellow Paint',
            itemQuantity: 1,
            unitPrice: 4.99,
            itemTotal: 4.99,
          },
        ],
        invoiceTotal: 9.98,
      },
    ],
  },
  getters: {
    getInvoiceDatabaseAll(state) {
      return state.invoiceDatabase;
    },
  },
  mutations: {},
  actions: {},
});
