<template>
  <ul class="">
    <li class="grid grid-cols-6 text-xxs text-white pb-1 border-b border-gray-500 sm:text-xs md:text-base">
      <div class="pl-2">
        <p class="">Invoice Id</p>
      </div>
      <div class="">
        <p class="">Due Date</p>
      </div>
      <div class="">
        <p class="">Country</p>
      </div>
      <div class="">
        <p class="">Zip Code</p>
      </div>
      <div class="">
        <p class="">Total</p>
      </div>
      <div class="">
        <p class="">Status</p>
      </div>
    </li>
    <li class="grid grid-cols-6 text-xxs text-gray-300 py-4 sm:text-xs md:text-base bg-blue-list-items rounded-2xl my-2">
      <div class="pl-2">
        <p class="">#4345</p>
      </div>
      <div class="">
        <p class="">2021-05-12</p>
      </div>
      <div class="">
        <p class="">France</p>
      </div>
      <div class="">
        <p class="">65152</p>
      </div>
      <div class="">
        <p class="">$1800,00</p>
      </div>
      <div class="">
        <p class="">Pending</p>
      </div>
    </li>
    <li class="grid grid-cols-6 text-xxs text-gray-300 py-4 sm:text-xs md:text-base bg-blue-list-items rounded-2xl my-2">
      <div class="pl-2">
        <p class="">#4345</p>
      </div>
      <div class="">
        <p class="">2021-05-12</p>
      </div>
      <div class="">
        <p class="">France</p>
      </div>
      <div class="">
        <p class="">65152</p>
      </div>
      <div class="">
        <p class="">$1800,00</p>
      </div>
      <div class="">
        <p class="">Pending</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Invoice List',
};
</script>
