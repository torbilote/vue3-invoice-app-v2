<template>
  <section class="mt-5 border-2 border-blue-100 mx-auto w-4/5 lg:w-3/5 bg-blue-invoice-details rounded-2xl">
    <h2 class="text-base text-white text-center font-medium mt-2 sm:text-lg lg:text-xl xl:text-2xl">Invoice Details</h2>
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col gap-y-2 text-xs text-white sm:text-base md:text-lg my-4 ml-2 md:w-1/2">
        <p class="">{{ invoice.invoiceId }}</p>
        <p class="">{{ invoice.invoiceStatus }}</p>
        <p class="">{{ invoice.invoiceDate }}</p>
        <p class="">{{ invoice.clientName }}</p>
        <p class="">{{ invoice.clientEmail }}</p>
        <p class="">{{ invoice.clientStreetAddress }}</p>
        <p class="">{{ invoice.clientCity }}</p>
        <p class="">{{ invoice.clientZipCode }}</p>
        <p class="">{{ invoice.clientCountry }}</p>
        <p class="">{{ invoice.clientNote }}</p>
        <p class="">{{ invoice.paymentDate }}</p>
      </div>
      <div class="bg-blue-list-items rounded-2xl md:mt-4 md:w-1/2 h-full max-h-">
        <div class="text-xs text-white sm:text-base md:text-base my-4 ml-2">
          <ul class="flex flex-col gap-y-2">
            <li class="grid grid-cols-4 font-medium">
              <p>Product Name</p>
              <p>Quantity</p>
              <p>Unit Price</p>
              <p>Item Total</p>
            </li>
            <li v-for="product in invoice.productsList" :key="product.itemId" class="grid grid-cols-4">
              <p>{{ product.itemName }}</p>
              <p>{{ product.itemQuantity }}</p>
              <p>${{ product.unitPrice }}</p>
              <p>${{ product.itemTotal }}</p>
            </li>
            <li class="grid grid-cols-4 font-semibold border-t border-gray-200 pt-2">
              <p>Total</p>
              <p></p>
              <p></p>
              <p>${{ invoice.invoiceTotal }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-around my-6">
      <TheButton @click="goToHome" class="text-xs text-white sm:text-base md:text-lg px-2 py-2 sm:w-36 hover:bg-yellow-500" :buttonColor="'orange'" :buttonTitle="'Back'" />
      <TheButton @click="deleteInvoiceFromDatabase(invoice.invoiceId)" class="text-xs text-white sm:text-base md:text-lg px-2 py-2 sm:w-36 hover:bg-red-400" :buttonColor="'red'" :buttonTitle="'Delete'" />
      <TheButton @click="goToEditInvoice" class="text-xs text-white sm:text-base md:text-lg px-2 py-2 sm:w-36 hover:bg-blue-400" :buttonColor="'blue'" :buttonTitle="'Modify'" />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TheButton from '../components/TheButton.vue';

export default {
  name: 'Invoice Details',
  components: {
    TheButton,
  },
  props: {
    invoiceId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      invoice: null,
    };
  },
  computed: {
    ...mapGetters(['getInvoiceDatabaseAll']),
  },
  methods: {
    ...mapActions(['deleteInvoice']),
    goToHome() {
      this.$router.push({
        name: 'Home',
      });
    },
    goToEditInvoice() {
      this.$router.push({
        name: 'Edit Invoice',
        params: {
          invoiceId: this.invoice.invoiceId,
        },
      });
    },
    deleteInvoiceFromDatabase(id) {
      this.goToHome();
      this.deleteInvoice(id);
    },
  },
  created() {
    [this.invoice] = this.getInvoiceDatabaseAll.filter((inv) => inv.invoiceId === this.invoiceId);
  },
};
</script>
