import { createStore } from 'vuex';
import moment from 'moment';

export default createStore({
  state: {
    invoiceDatabase: [
      {
        invoiceId: 80111,
        invoiceStatus: 'Pending',
        invoiceDate: '2021-04-12',
        clientName: 'Norbert',
        clientEmail: 'norbert@abc.com',
        clientStreetAddress: 'Wall Street 5/3',
        clientCity: 'Paris',
        clientZipCode: 65152,
        clientCountry: 'France',
        clientNote: 'Please use strong package.',
        paymentTerms: '30 days Payment',
        paymentDate: '2021-05-12',
        productsList: [
          {
            itemId: 10,
            itemName: 'Black Paint',
            itemQuantity: 5,
            unitPrice: 4.99,
            itemTotal: 24.95,
          },
          {
            itemId: 20,
            itemName: 'Blue Paint',
            itemQuantity: 3,
            unitPrice: 4.99,
            itemTotal: 14.97,
          },
        ],
        invoiceTotal: 39.92,
      },
      {
        invoiceId: 80211,
        invoiceStatus: 'Paid',
        invoiceDate: '2021-03-12',
        clientName: 'Justyna',
        clientEmail: 'justyna@abc.com',
        clientStreetAddress: 'Wood Street 1/2',
        clientCity: 'Madrid',
        clientZipCode: 12178,
        clientCountry: 'Spain',
        clientNote: 'Please use eco package.',
        paymentTerms: '60 days Payment',
        paymentDate: '2021-05-11',
        productsList: [
          {
            itemId: 30,
            itemName: 'Black',
            itemQuantity: 1,
            unitPrice: 4.99,
            itemTotal: 4.99,
          },
          {
            itemId: 40,
            itemName: 'Blue',
            itemQuantity: 1,
            unitPrice: 4.99,
            itemTotal: 4.99,
          },
        ],
        invoiceTotal: 9.98,
      },
    ],
    filters: {
      country: 'Country',
      status: 'Status',
    },
    sortOptions: {
      attribute: 'invoiceId',
      direction: 'asc',
    },
    selectOptionsCountry: [
      {
        value: '*Select country*',
        isOn: true,
        isOff: true,
      },
      {
        value: 'France',
      },
      {
        value: 'Spain',
      },
    ],
    selectOptionsPayment: [
      {
        value: '*Select payment*',
        isOn: true,
        isOff: true,
      },
      {
        value: '30 days Payment',
      },
      {
        value: '60 days Payment',
      },
    ],
    selectOptionsProduct: [
      {
        value: '*Select item*',
        price: 0.0,
        isOn: true,
        isOff: true,
      },
      {
        value: 'Black Paint',
        price: 29.99,
      },
      {
        value: 'Blue Paint',
        price: 24.99,
      },
    ],
    ids: {
      invoiceId: 80311,
      itemId: 50,
    },
  },
  getters: {
    getInvoiceDatabaseAll(state) {
      return state.invoiceDatabase;
    },
    getInvoiceDatabaseSelected(state, getters) {
      const allInvoices = getters.getInvoiceDatabaseAll;
      const { filters, sortOptions } = state;
      let selectedInvoices = null;
      if (filters.country === 'Country' && filters.status === 'Status') {
        selectedInvoices = allInvoices.filter((inv) => inv);
      } else if (filters.country === 'Country' && filters.status !== 'Status') {
        selectedInvoices = allInvoices.filter((inv) => inv.invoiceStatus === filters.status);
      } else if (filters.country !== 'Country' && filters.status === 'Status') {
        selectedInvoices = allInvoices.filter((inv) => inv.clientCountry === filters.country);
      } else {
        selectedInvoices = allInvoices.filter((inv) => inv.invoiceStatus === filters.status && inv.clientCountry === filters.country);
      }
      if (sortOptions.attribute === 'invoiceId') {
        if (sortOptions.direction === 'asc') {
          selectedInvoices.sort((a, b) => a.invoiceId - b.invoiceId);
        } else {
          selectedInvoices.sort((a, b) => b.invoiceId - a.invoiceId);
        }
      } else if (sortOptions.attribute === 'invoiceDate') {
        if (sortOptions.direction === 'asc') {
          selectedInvoices.sort((a, b) => moment(a.invoiceDate) - moment(b.invoiceDate));
        } else {
          selectedInvoices.sort((a, b) => moment(b.invoiceDate) - moment(a.invoiceDate));
        }
      } else if (sortOptions.attribute === 'clientCountry') {
        if (sortOptions.direction === 'asc') {
          selectedInvoices.sort((a, b) => (a.clientCountry > b.clientCountry ? -1 : b.clientCountry > a.clientCountry ? 1 : 0));
        } else {
          selectedInvoices.sort((a, b) => (a.clientCountry > b.clientCountry ? 1 : b.clientCountry > a.clientCountry ? -1 : 0));
        }
      } else if (sortOptions.attribute === 'clientZipCode') {
        if (sortOptions.direction === 'asc') {
          selectedInvoices.sort((a, b) => a.clientZipCode - b.clientZipCode);
        } else {
          selectedInvoices.sort((a, b) => b.clientZipCode - a.clientZipCode);
        }
      } else if (sortOptions.attribute === 'invoiceTotal') {
        if (sortOptions.direction === 'asc') {
          selectedInvoices.sort((a, b) => a.invoiceTotal - b.invoiceTotal);
        } else {
          selectedInvoices.sort((a, b) => b.invoiceTotal - a.invoiceTotal);
        }
      } else if (sortOptions.direction === 'asc') {
        selectedInvoices.sort((a, b) => (a.invoiceStatus > b.invoiceStatus ? -1 : b.invoiceStatus > a.invoiceStatus ? 1 : 0));
      } else {
        selectedInvoices.sort((a, b) => (a.invoiceStatus > b.invoiceStatus ? 1 : b.invoiceStatus > a.invoiceStatus ? -1 : 0));
      }
      return selectedInvoices;
    },
    getAttributeSelectOptions(state) {
      return [state.selectOptionsCountry, state.selectOptionsPayment, state.selectOptionsProduct];
    },
    getIds(state) {
      return state.ids;
    },
    getSortOptions(state) {
      return state.sortOptions;
    },
  },
  mutations: {
    updateInvoice(state, payload) {
      const index = state.invoiceDatabase.findIndex((inv) => inv.invoiceId === payload.invoiceId);
      if (index !== -1) {
        state.invoiceDatabase[index] = payload;
      }
    },
    createInvoice(state, payload) {
      state.invoiceDatabase.push(payload);
    },
    deleteInvoice(state, payload) {
      const index = state.invoiceDatabase.findIndex((inv) => inv.invoiceId === payload);
      if (index !== -1) {
        state.invoiceDatabase.splice(index, 1);
      }
    },
    setFilters(state, payload) {
      state.filters.country = payload.country;
      state.filters.status = payload.status;
    },
    setSortOptions(state, payload) {
      if (state.sortOptions.attribute === payload && state.sortOptions.direction === 'asc') {
        state.sortOptions.direction = 'desc';
      } else if (state.sortOptions.attribute === payload && state.sortOptions.direction === 'desc') {
        state.sortOptions.direction = 'asc';
      } else {
        state.sortOptions.attribute = payload;
        state.sortOptions.direction = 'asc';
      }
    },
    incrementId(state, payload) {
      if (payload === 'invoice') state.ids.invoiceId += 100;
      else if (payload === 'item') state.ids.itemId += 10;
    },
  },
  actions: {
    updateInvoice(context, payload) {
      context.commit('updateInvoice', payload);
    },
    createInvoice(context, payload) {
      context.commit('createInvoice', payload);
    },
    deleteInvoice(context, payload) {
      context.commit('deleteInvoice', payload);
    },
    setFilters(context, payload) {
      context.commit('setFilters', payload);
    },
    setSortOptions(context, payload) {
      context.commit('setSortOptions', payload);
    },
    incrementId(context, payload) {
      context.commit('incrementId', payload);
    },
  },
});
