<template>
  <form class="mt-5">
    <div class="w-4/5 lg:w-3/5 mx-auto flex flex-col lg:gap-y-2">
      <h2 class="text-base text-white text-center font-medium sm:text-lg lg:text-xl xl:text-2xl">Edit Invoice</h2>
      <InvoiceAttributeInput v-model="localInvoice.invoiceId" :inputType="'input'" :htmlId="'invoiceId'" :labelText="'Invoice Id'" :isOff="true" />
      <InvoiceAttributeInput v-model="localInvoice.invoiceDate" @isValid="checkInvoiceIfValid($event, 0)" :inputType="'date'" :htmlId="'invoiceDate'" :labelText="'Invoice Date'" />
      <label class="invoice-status flex flex-col mt-3">
        <span class="text-sm text-white font-extralight mb-1 lg:text-base"
          >Invoice Status: <span class="font-medium">{{ localInvoice.invoiceStatus }}</span></span
        ><input type="checkbox" v-model="checkbox" class="cursor-pointer h-7 w-7" />
      </label>
      <InvoiceAttributeInput v-model="localInvoice.clientName" @isValid="checkInvoiceIfValid($event, 1)" :inputType="'text'" :htmlId="'clientName'" :labelText="'Client Name'" />
      <InvoiceAttributeInput v-model="localInvoice.clientEmail" @isValid="checkInvoiceIfValid($event, 2)" :inputType="'email'" :htmlId="'clientEmail'" :labelText="'Client Email'" />
      <InvoiceAttributeInput v-model="localInvoice.clientStreetAddress" @isValid="checkInvoiceIfValid($event, 3)" :inputType="'text'" :htmlId="'clientStreetAddress'" :labelText="'Client Street Address'" />
      <InvoiceAttributeInput v-model="localInvoice.clientCity" @isValid="checkInvoiceIfValid($event, 4)" :inputType="'text'" :htmlId="'clientCity'" :labelText="'Client City'" />
      <InvoiceAttributeInput v-model="localInvoice.clientZipCode" @isValid="checkInvoiceIfValid($event, 5)" :inputType="'text'" :htmlId="'clientZipCode'" :labelText="'Client Zip Code'" />
      <InvoiceAttributeSelect v-model="localInvoice.clientCountry" :optionList="getAttributeSelectOptions[0]" :htmlId="'clientCountry'" :labelText="'Client Country'" />
      <InvoiceAttributeTextArea v-model="localInvoice.clientNote" :htmlId="'clientNote'" :labelText="'Client Note'" />
      <InvoiceAttributeSelect v-model="localInvoice.paymentTerms" :optionList="getAttributeSelectOptions[1]" :htmlId="'paymentTerms'" :labelText="'Payment Terms'" />
      <InvoiceAttributeInput v-model="localInvoice.paymentDate" :inputType="'date'" :htmlId="'paymentDate'" :labelText="'Payment Date'" :isOff="true" />
      <h3 class="mt-5 text-sm text-white text-left font-medium">Products</h3>
      <template v-if="localInvoice.productsList">
        <div v-for="(product, ind) in localInvoice.productsList" :key="product.itemId" class="mt-3">
          <div class="flex flex-col p-3 rounded-2xl bg-blue-products relative">
            <InvoiceProductSelect v-model="product.itemName" :optionList="getAttributeSelectOptions[2]" :htmlId="'itemName'" :labelText="'Item Name'" />
            <InvoiceProductInput v-model="product.itemQuantity" @isValid="checkItemIfValid($event, ind)" :inputType="'number'" :htmlId="'itemQuantity'" :labelText="'Item Quantity'" />
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
        <TheButton @click="backToInvoiceDetails" class="text-white text-sm px-2 py-2 sm:w-36 hover:bg-yellow-500" :buttonColor="'orange'" :buttonTitle="'Cancel'" />
        <TheButton @click="goToInvoiceDetails" class="text-white text-sm px-2 py-2 sm:w-36 hover:bg-blue-400" :buttonColor="'blue'" :buttonTitle="'Save Changes'" />
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
  name: 'Edit Invoice',
  components: {
    InvoiceAttributeInput,
    InvoiceAttributeSelect,
    InvoiceAttributeTextArea,
    InvoiceProductInput,
    InvoiceProductSelect,
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
      localInvoice: null,
      checkbox: false,
      invoiceValidator: [1, 1, 1, 1, 1, 1],
      itemValidator: null,
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
    localProductsList: {
      handler(freshList) {
        const updatedList = freshList;
        let invoiceTotal = 0;

        for (let i = 0; i < updatedList.length; i += 1) {
          const { itemName, itemQuantity } = updatedList[i];
          const itemDatabase = this.getAttributeSelectOptions[2];

          const itemIndex = itemDatabase.findIndex((product) => product.value === itemName);

          if (itemIndex !== -1) {
            updatedList[i].unitPrice = itemDatabase[itemIndex].price;
            updatedList[i].itemTotal = parseFloat((updatedList[i].unitPrice * itemQuantity).toFixed(2));
            invoiceTotal += updatedList[i].itemTotal;
          }

          this.localInvoice.invoiceTotal = parseFloat(invoiceTotal.toFixed(2));
        }
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(['getInvoiceDatabaseAll', 'getAttributeSelectOptions', 'getIds']),
    localProductsList() {
      if (this.localInvoice) {
        return this.localInvoice.productsList;
      }
      return 0;
    },
  },
  methods: {
    ...mapActions(['updateInvoice', 'incrementId']),
    backToInvoiceDetails() {
      this.$router.push({
        name: 'Invoice Details',
        params: {
          invoiceId: this.invoice.invoiceId,
        },
      });
    },
    goToInvoiceDetails() {
      if (this.localInvoice.productsList.length > 0) {
        if (this.invoiceValidator.every((num) => num === 1) && this.itemValidator.every((num) => num === 1) && this.localInvoice.productsList.every((i) => i.itemName !== '*Select item*')) {
          this.updateInvoice(this.localInvoice);
          this.$router.push({
            name: 'Invoice Details',
            params: {
              invoiceId: this.invoice.invoiceId,
            },
          });
        }
      }
    },
    addProductToInvoice() {
      this.localInvoice.productsList.push({
        itemId: this.getIds.itemId,
        itemName: '*Select item*',
        itemQuantity: 0,
        unitPrice: 0,
        itemTotal: 0,
      });
      this.incrementId('item');
      this.itemValidator.push(-1);
    },
    deleteProductFromInvoice(id) {
      const index = this.localInvoice.productsList.findIndex((item) => item.itemId === id);
      this.localInvoice.productsList.splice(index, 1);
      this.itemValidator.splice(index, 1);
    },
    checkInvoiceIfValid(event, nth) {
      this.invoiceValidator[nth] = event;
    },
    checkItemIfValid(event, ind) {
      this.itemValidator[ind] = event;
    },
  },
  created() {
    [this.invoice] = this.getInvoiceDatabaseAll.filter((inv) => inv.invoiceId === this.invoiceId);
    this.localInvoice = JSON.parse(JSON.stringify(this.invoice));

    if (this.localInvoice.invoiceStatus === 'Pending') {
      this.checkbox = false;
    } else this.checkbox = true;

    this.itemValidator = Array(this.localInvoice.productsList.length).fill(1);
  },
};
</script>
