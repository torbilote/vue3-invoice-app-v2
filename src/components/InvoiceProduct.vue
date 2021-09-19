<template>
  <div class="mt-3">
    <div class="flex flex-col p-3 rounded-2xl bg-blue-products">
      <label for="1" class="text-sm text-white font-extralight mb-1">Item Name</label>
      <select id="1" :value="itemName" class="w-10/12 py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light bg-blue-attributes">
        <option value="Item" selected disabled>*Select item*</option>
        <option value="Black">Black Paint</option>
        <option value="Blue">Blue Paint</option>
      </select>
      <label for="2" class="text-sm text-white font-extralight mb-1 mt-3">Item Quantity</label>
      <input id="2" :value="itemQuantity" type="number" step="1" min="0" max="20" class="w-10/12 py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light bg-blue-attributes" />
      <label for="3" class="text-sm text-white font-extralight mb-1 mt-3">Unit Price</label>
      <input id="3" :value="unitPrice" type="number" disabled class="w-10/12 py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light bg-gray-500" />
      <label for="4" class="text-sm text-white font-extralight mb-1 mt-3">Item Total</label>
      <input id="4" :value="itemTotal" type="number" disabled class="w-10/12 py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light bg-gray-500" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Invoice Product',
  props: {
    itemName: {
      type: String,
      required: false,
      default: '',
    },
    itemQuantity: {
      type: Number,
      required: false,
      default: null,
    },
    unitPrice: {
      type: Number,
      required: false,
      default: null,
    },
    itemTotal: {
      type: Number,
      required: false,
      default: null,
    },
  },
  computed: {
    isHtmlDisabled() {
      return {
        'bg-blue-attributes': !this.$props.htmlDisabled,
        'bg-gray-400': this.$props.htmlDisabled,
      };
    },
  },
};
</script>
