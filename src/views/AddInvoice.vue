<template>
  <form class="mt-5">
    <div class="w-4/5 lg:w-3/5 mx-auto flex flex-col lg:gap-y-2">
      <h2 class="text-base text-white text-center font-medium sm:text-lg lg:text-xl xl:text-2xl">New Invoice</h2>
      <InvoiceAttribute :htmlType="'input'" :htmlId="'invoiceId'" :inputType="'text'" :labelText="'Invoice Id'" :disabled="true" />
      <InvoiceAttribute :htmlType="'input'" :htmlId="'invoiceDate'" :inputType="'date'" :labelText="'Invoice Date'" />
      <InvoiceAttribute :htmlType="'input'" :htmlId="'clientName'" :inputType="'text'" :labelText="'Client Name'" />
      <InvoiceAttribute :htmlType="'input'" :htmlId="'clientEmail'" :inputType="'email'" :labelText="'Client Email'" />
      <InvoiceAttribute :htmlType="'input'" :htmlId="'clientStreetAddress'" :inputType="'text'" :labelText="'Client Street Address'" />
      <InvoiceAttribute :htmlType="'input'" :htmlId="'clientCity'" :inputType="'text'" :labelText="'Client City'" />
      <InvoiceAttribute :htmlType="'input'" :htmlId="'clientZipCode'" :inputType="'text'" :labelText="'Client Zip Code'" />
      <InvoiceAttribute :htmlType="'select'" :htmlId="'clientCountry'" :selectType="'country'" :labelText="'Client Country'" />
      <InvoiceAttribute :htmlType="'textarea'" :htmlId="'clientNote'" :selectType="'country'" :labelText="'Client Note'" />
      <InvoiceAttribute :htmlType="'select'" :htmlId="'paymentTerms'" :selectType="'paymentTerms'" :labelText="'Payment Terms'" />
      <InvoiceAttribute :htmlType="'input'" :htmlId="'paymentDate'" :inputType="'date'" :labelText="'Payment Date'" :disabled="true" />
      <h3 class="mt-5 text-sm text-white text-left font-medium">Products</h3>
      <InvoiceProduct />
      <div class="mt-3 flex justify-start">
        <svg class="h-auto w-7 cursor-pointer" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <InvoiceAttribute :htmlType="'input'" :htmlId="'invoiceTotal'" :inputType="'number'" :labelText="'Invoice Total'" :disabled="true" />
      <div class="flex flex-row mt-10 mb-5 gap-x-2 h-10 justify-between">
        <TheButton class="text-white text-sm px-2 py-2 sm:w-36 hover:bg-red-400" :buttonColor="'red'" :buttonTitle="'Cancel'" />
        <TheButton class="text-white text-sm px-2 py-2 sm:w-36 hover:bg-blue-400" :buttonColor="'blue'" :buttonTitle="'Create Invoice'" />
      </div>
    </div>
  </form>
</template>

<script>
import InvoiceAttribute from '../components/InvoiceAttribute.vue';
import InvoiceProduct from '../components/InvoiceProduct.vue';
import TheButton from '../components/TheButton.vue';

export default {
  name: 'Add Invoice',
  components: {
    InvoiceAttribute,
    InvoiceProduct,
    TheButton,
  },
};
</script>
