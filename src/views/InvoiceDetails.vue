<template>
  <section class="mt-5 border-2 border-blue-100 mx-auto w-4/5 lg:w-3/5 bg-blue-invoice-details rounded-2xl">
    <h2 class="text-base text-white text-center font-medium mt-2 sm:text-lg lg:text-xl xl:text-2xl">Invoice Details</h2>
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col gap-y-2 text-xs text-white sm:text-base md:text-lg my-4 ml-2 md:w-1/2">
        <p class="">{{ invoiceId }}</p>
        <p class="">Status</p>
        <p class="">Invoice Date</p>
        <p class="">Client Name</p>
        <p class="">Client Email</p>
        <p class="">Client Street Address</p>
        <p class="">Client City</p>
        <p class="">Client Zip Code</p>
        <p class="">Client Country</p>
        <p class="">Client Note</p>
        <p class="">Payment Date</p>
      </div>
      <div class="bg-blue-list-items rounded-2xl md:mt-4 md:w-1/2 h-full max-h-">
        <div class="text-xs text-white sm:text-base md:text-base my-4 ml-2">
          <ul class="flex flex-col gap-y-2">
            <li class="grid grid-cols-4 font-medium">
              <p>Product Name</p>
              <p>Unit Price</p>
              <p>Quantity</p>
              <p>Item Total</p>
            </li>
            <li class="grid grid-cols-4">
              <p>Black Paint</p>
              <p>4.99</p>
              <p>5</p>
              <p>24.96</p>
            </li>
            <li class="grid grid-cols-4">
              <p>Blue Paint</p>
              <p>4.99</p>
              <p>5</p>
              <p>24.96</p>
            </li>
            <li class="grid grid-cols-4">
              <p>Blue Paint</p>
              <p>4.99</p>
              <p>5</p>
              <p>24.96</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex flex-row justify-around my-6">
      <TheButton class="text-xs text-white sm:text-base md:text-lg px-2 py-2 sm:w-36 hover:bg-red-400" :buttonColor="'red'" :buttonTitle="'Back'" />
      <TheButton class="text-xs text-white sm:text-base md:text-lg px-2 py-2 sm:w-36 hover:bg-blue-400" :buttonColor="'blue'" :buttonTitle="'Edit Invoice'" />
    </div>
  </section>
</template>

<script>
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
};
</script>
