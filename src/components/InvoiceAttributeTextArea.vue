<template>
  <div class="mt-3 flex flex-col">
    <label :for="htmlId" class="text-sm text-white font-extralight mb-1 lg:text-base"> {{ labelText }}</label>
    <textarea :value="modelValue" @input="emitValue" :id="htmlId" rows="5" maxlength="150" :class="isDisabled" :disabled="isOff" class="resize-none py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light lg:text-base"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Invoice Attribute Text Area',
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
