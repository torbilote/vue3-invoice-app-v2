<template>
  <div class="mt-3 flex flex-col">
    <label :for="htmlId" class="w-10/12 text-sm text-white font-extralight mb-1 mt-3"> {{ labelText }}</label>
    <input :value="modelValue" @input="emitValue" :id="htmlId" :class="isDisabled" :disabled="isOff" :type="inputType" class="w-10/12 py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light" />
    <p v-if="validate(value) === 1 && !isOff" class="text-sm font-light mb-1 lg:text-base text-green-general">Value is valid.</p>
    <p v-if="validate(value) === -1 && !isOff" class="text-sm font-light mb-1 lg:text-base text-red-400">Value is invalid. Please correct.</p>
  </div>
</template>

<script>
export default {
  name: 'Invoice Product Input',
  data() {
    return {
      value: 1,
    };
  },
  props: {
    modelValue: {
      type: [String, Number, Date],
      required: false,
    },
    htmlId: {
      type: String,
      required: true,
    },
    inputType: {
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
  emits: ['update:modelValue', 'isValid'],
  computed: {
    isDisabled() {
      return {
        'bg-blue-attributes': !this.$props.isOff,
        'bg-gray-500': this.$props.isOff,
      };
    },
  },
  methods: {
    validate(val) {
      const val2 = Number(val);
      if (val2) {
        return Number.isInteger(val2) && val2 > 0 ? 1 : -1;
      }
      return 0;
    },
    emitValue(event) {
      this.value = event.target.value;
      this.$emit('update:modelValue', event.target.value);
      this.$emit('isValid', this.validate(event.target.value));
    },
  },
};
</script>
