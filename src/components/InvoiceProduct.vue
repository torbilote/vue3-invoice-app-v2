<template>
  <div class="mt-3">
    <div class="flex flex-col p-3 rounded-2xl bg-blue-products">
      <label for="1" class="text-sm text-white font-extralight mb-1">Item Name</label>
      <select id="1" :class="isDisabled" class="w-10/12 py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light">
        <option value="Item" selected disabled>*Select item*</option>
        <option value="Black">Black Paint</option>
        <option value="Blue">Blue Paint</option>
      </select>
      <label for="2" class="text-sm text-white font-extralight mb-1 mt-3">Item Quantity</label>
      <input id="2" type="number" step="1" min="0" max="20" :class="isDisabled" class="w-10/12 py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light" />
      <label for="3" class="text-sm text-white font-extralight mb-1 mt-3">Unit Price</label>
      <input id="3" type="number" disabled :class="isDisabled" class="w-10/12 py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light" />
      <label for="4" class="text-sm text-white font-extralight mb-1 mt-3">Item Total</label>
      <input id="4" type="number" disabled :class="isDisabled" class="w-10/12 py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invoice Product',
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    isDisabled() {
      return {
        'bg-blue-attributes': !this.$props.disabled,
        'bg-gray-400': this.$props.disabled,
      };
    },
  },
};
</script>
