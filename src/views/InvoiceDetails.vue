<template>
  <section class="mt-5 border border-red-300 mx-auto w-4/5 lg:w-3/5">
    <h2 class="text-base text-white text-center font-medium sm:text-lg lg:text-xl xl:text-2xl">Invoice Details</h2>
    <div class="flex flex-row">
      <div class="w-1/2 mb-2 flex flex-col gap-y-1">
        <p class="">Invoice Id</p>
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
      <div class="w-1/2 mb-2">
        <ul class="grid grid-cols-6">
          <li class="">
            <p>Product Name</p>
            <p>Unit Price</p>
            <p>Quantity</p>
            <p>Item Total</p>
          </li>
          <li class="">
            <p>Black Paint</p>
            <p>4.99</p>
            <p>5</p>
            <p>24.96</p>
          </li>
          <li class="">
            <p>Blue Paint</p>
            <p>4.99</p>
            <p>5</p>
            <p>24.96</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="mb-2 flex flex-row justify-around">
      <TheButton class="text-white text-sm px-2 py-2 sm:w-36" :buttonColor="'red'" :buttonTitle="'Back'" />
      <TheButton class="text-white text-sm px-2 py-2 sm:w-36" :buttonColor="'blue'" :buttonTitle="'Edit'" />
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
};
</script>
