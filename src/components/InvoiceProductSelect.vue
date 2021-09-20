<template>
  <div class="mt-3 flex flex-col">
    <label :for="htmlId" class="text-sm text-white font-extralight mb-1"> {{ labelText }}</label>
    <select :value="modelValue" @input="emitValue" :id="htmlId" :class="isDisabled" :disabled="isOff" class="w-10/12 py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light">
      <option :value="optionPlaceholder" selected disabled>{{ optionPlaceholder }}</option>
      <option v-for="option in optionList" :key="option.value" :value="option.value">{{ option.value }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Invoice Attribute Select',
  props: {
    modelValue: {
      type: [String, Number, Date],
      required: false,
    },
    htmlId: {
      type: String,
      required: true,
    },
    labelText: {
      type: String,
      required: true,
    },
    isOff: {
      type: Boolean,
      required: false,
      default: false,
    },
    optionPlaceholder: {
      type: String,
      required: true,
    },
    optionList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isDisabled() {
      return {
        'bg-blue-attributes': !this.$props.isOff,
        'bg-gray-500': this.$props.isOff,
      };
    },
  },
  methods: {
    emitValue(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>
