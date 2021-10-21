<template>
  <form class="mt-5">
    <div class="w-4/5 lg:w-3/5 mx-auto flex flex-col lg:gap-y-2">
      <h2 class="text-base text-white text-center font-medium sm:text-lg lg:text-xl xl:text-2xl">New Invoice</h2>
      <InvoiceAttributeInput v-model="localInvoice.invoiceId" :inputType="'input'" :htmlId="'invoiceId'" :labelText="'Invoice Id'" :isOff="true" />
      <InvoiceAttributeInput v-model="localInvoice.invoiceDate" :inputType="'date'" :htmlId="'invoiceDate'" :labelText="'Invoice Date'" />
      <label class="invoice-status flex flex-col mt-3">
        <span class="text-sm text-white font-extralight mb-1 lg:text-base"
          >Invoice Status: <span class="font-medium">{{ localInvoice.invoiceStatus }}</span></span
        ><input type="checkbox" v-model="checkbox" class="cursor-pointer h-7 w-7" />
      </label>
      <InvoiceAttributeInput v-model="localInvoice.clientName" :inputType="'text'" :htmlId="'clientName'" :labelText="'Client Name'" />
      <InvoiceAttributeInput v-model="localInvoice.clientEmail" :inputType="'email'" :htmlId="'clientEmail'" :labelText="'Client Email'" />
      <InvoiceAttributeInput v-model="localInvoice.clientStreetAddress" :inputType="'text'" :htmlId="'clientStreetAddress'" :labelText="'Client Street Address'" />
      <InvoiceAttributeInput v-model="localInvoice.clientCity" :inputType="'text'" :htmlId="'clientCity'" :labelText="'Client City'" />
      <InvoiceAttributeInput v-model="localInvoice.clientZipCode" :inputType="'text'" :htmlId="'clientZipCode'" :labelText="'Client Zip Code'" />
      <InvoiceAttributeSelect v-model="localInvoice.clientCountry" :optionPlaceholder="'*Select country*'" :optionList="getAttributeSelectOptions[0]" :htmlId="'clientCountry'" :labelText="'Client Country'" />
      <InvoiceAttributeTextArea v-model="localInvoice.clientNote" :htmlId="'clientNote'" :labelText="'Client Note'" />
      <InvoiceAttributeSelect v-model="localInvoice.paymentTerms" :optionPlaceholder="'*Select payment*'" :optionList="getAttributeSelectOptions[1]" :htmlId="'paymentTerms'" :labelText="'Payment Terms'" />
      <InvoiceAttributeInput v-model="localInvoice.paymentDate" :inputType="'date'" :htmlId="'paymentDate'" :labelText="'Payment Date'" :isOff="true" />
      <h3 class="mt-5 text-sm text-white text-left font-medium">Products</h3>
      <template v-if="localInvoice.productsList">
        <div v-for="product in localInvoice.productsList" :key="product.itemId" class="mt-3">
          <div class="flex flex-col p-3 rounded-2xl bg-blue-products relative">
            <InvoiceProductSelect v-model="product.itemName" optionPlaceholder="'*Select item*'" :optionList="getAttributeSelectOptions[2]" :htmlId="'itemName'" :labelText="'Item Name'" />
            <InvoiceProductInput v-model="product.itemQuantity" :inputType="'number'" :htmlId="'itemQuantity'" :labelText="'Item Quantity'" />
            <InvoiceProductInput v-model="product.unitPrice" :inputType="'number'" :htmlId="'unitPrice'" :labelText="'Unit Price'" :isOff="true" />
            <InvoiceProductInput v-model="product.itemTotal" :inputType="'number'" :htmlId="'itemTotal'" :labelText="'Item Total'" :isOff="true" />
            <div class="absolute p-3 right-0 top-0">
              <p @click="deleteProductFromInvoice(product.itemId)" class="text-red-600 text-sm font-normal">Delete</p>
            </div>
          </div>
        </div>
      </template>
      <div class="mt-3 flex justify-start">
        <svg @click="addProductToInvoice" class="h-auto w-7 cursor-pointer" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="a0">
            <g id="a3">
              <path id="Vector" d="M15 28C11.26 28 7.74499 26.544 5.10099 23.899C0.778991 19.578 -0.247006 13.025 2.54699 7.595C2.79999 7.104 3.40199 6.911 3.89399 7.163C4.38499 7.415 4.57899 8.018 4.32599 8.51C1.93099 13.165 2.80999 18.781 6.51499 22.485C8.78099 24.752 11.794 26 15 26C18.205 26 21.219 24.752 23.485 22.485C25.751 20.218 27 17.205 27 14C27 10.794 25.752 7.781 23.485 5.515C21.218 3.249 18.206 2 15 2C11.794 2 8.78099 3.249 6.51499 5.515C6.12399 5.906 5.49199 5.906 5.10099 5.515C4.70999 5.124 4.70999 4.492 5.10099 4.101C7.74499 1.457 11.26 0 15 0C18.74 0 22.256 1.457 24.899 4.101C27.544 6.745 29 10.26 29 14C29 17.739 27.544 21.255 24.899 23.899C22.256 26.544 18.74 28 15 28Z" fill="#11EF5C" />
            </g>
            <g id="a2">
              <path id="Vector 2" d="M15 20C14.448 20 14 19.553 14 19V9C14 8.448 14.448 8 15 8C15.552 8 16 8.448 16 9V19C16 19.553 15.552 20 15 20Z" fill="#11EF5C" />
            </g>
            <g id="a1">
              <path id="Vector 3" d="M20 15H10C9.448 15 9 14.552 9 14C9 13.448 9.448 13 10 13H20C20.553 13 21 13.448 21 14C21 14.552 20.553 15 20 15Z" fill="#11EF5C" />
            </g>
          </g>
        </svg>
      </div>
      <InvoiceAttributeInput v-model="localInvoice.invoiceTotal" :inputType="'number'" :htmlId="'invoiceTotal'" :labelText="'Invoice Total'" :isOff="true" />
      <div class="flex flex-row mt-10 mb-5 gap-x-2 h-10 justify-between">
        <TheButton @click="backToHome" class="text-white text-sm px-2 py-2 sm:w-36 hover:bg-yellow-500" :buttonColor="'orange'" :buttonTitle="'Cancel'" />
        <TheButton @click="goToHome" class="text-white text-sm px-2 py-2 sm:w-36 hover:bg-blue-400" :buttonColor="'blue'" :buttonTitle="'Create invoice'" />
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';
import InvoiceAttributeInput from '../components/InvoiceAttributeInput.vue';
import InvoiceAttributeSelect from '../components/InvoiceAttributeSelect.vue';
import InvoiceAttributeTextArea from '../components/InvoiceAttributeTextArea.vue';
import InvoiceProductInput from '../components/InvoiceProductInput.vue';
import InvoiceProductSelect from '../components/InvoiceProductSelect.vue';
import TheButton from '../components/TheButton.vue';

export default {
  name: 'Add Invoice',
  components: {
    InvoiceAttributeInput,
    InvoiceAttributeSelect,
    InvoiceAttributeTextArea,
    InvoiceProductInput,
    InvoiceProductSelect,
    TheButton,
  },
  data() {
    return {
      newId: 8532,
      localInvoice: null,
      checkbox: false,
    };
  },
  watch: {
    checkbox(value) {
      if (value) this.localInvoice.invoiceStatus = 'Paid';
      else this.localInvoice.invoiceStatus = 'Pending';
    },
    'localInvoice.paymentTerms': function _(value) {
      if (value === '30 days Payment') this.localInvoice.paymentDate = moment(this.localInvoice.invoiceDate).add(30, 'days').format('YYYY-MM-DD');
      else if (value === '60 days Payment') this.localInvoice.paymentDate = moment(this.localInvoice.invoiceDate).add(60, 'days').format('YYYY-MM-DD');
    },
    'localInvoice.invoiceDate': function _() {
      this.localInvoice.paymentTerms = '*Select payment*';
      this.localInvoice.paymentDate = null;
    },
  },
  computed: {
    ...mapGetters(['getInvoiceDatabaseAll', 'getAttributeSelectOptions', 'getNextId']),
  },
  methods: {
    ...mapActions(['updateInvoice', 'createInvoice']),
    backToHome() {
      this.$router.push({
        name: 'Home',
      });
    },
    goToHome() {
      this.createInvoice(this.localInvoice);
      this.$router.push({
        name: 'Home',
      });
    },
    addProductToInvoice() {
      this.localInvoice.productsList.push({
        itemId: this.getNextId,
        itemName: '',
        itemQuantity: 1,
        unitPrice: 0,
        itemTotal: 0,
      });
    },
    deleteProductFromInvoice(id) {
      const index = this.localInvoice.productsList.findIndex((item) => item.itemId === id);
      this.localInvoice.productsList.splice(index, 1);
    },
  },
  created() {
    this.localInvoice = {
      invoiceId: this.getNextId,
      invoiceStatus: 'Pending',
      invoiceDate: moment().format('YYYY-MM-DD'),
      clientName: null,
      clientEmail: null,
      clientStreetAddress: null,
      clientCity: null,
      clientZipCode: null,
      clientCountry: '*Select country*',
      clientNote: null,
      paymentTerms: '*Select payment*',
      paymentDate: null,
      productsList: [],
      invoiceTotal: null,
    };
  },
};
</script>
