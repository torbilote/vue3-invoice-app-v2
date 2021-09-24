<template>
  <li v-for="invoice in getInvoiceDatabaseSelected" :key="invoice.invoiceId" @click="goToInvoiceDetails(invoice)" class="grid grid-cols-6 text-xxs text-gray-200 py-4 sm:text-xs md:text-base bg-blue-list-items rounded-2xl my-2">
    <div class="pl-2">
      <p>#{{ invoice.invoiceId }}</p>
    </div>
    <div>
      <p>{{ invoice.paymentDate }}</p>
    </div>
    <div>
      <p>{{ invoice.clientCountry }}</p>
    </div>
    <div>
      <p>{{ invoice.clientZipCode }}</p>
    </div>
    <div>
      <p>${{ invoice.invoiceTotal }}</p>
    </div>
    <div class="relative">
      <div class="absolute w-1 h-1 rounded-full l-0 top-1 bg-yellow-500 sm:top-1.5 md:top-2 md:w-1.5 md:h-1.5"></div>
      <p class="ml-3">{{ invoice.invoiceStatus }}</p>
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Invoice List Record',
  computed: {
    ...mapGetters(['getInvoiceDatabaseSelected']),
  },
  methods: {
    goToInvoiceDetails(invoice) {
      this.$router.push({
        name: 'Invoice Details',
        params: { invoiceId: invoice.invoiceId },
      });
    },
  },
};
</script>
