<template>
  <div class="mt-3 flex flex-col">
    <label :for="htmlId" class="text-sm text-white font-extralight mb-1 lg:text-base"> {{ labelText }}</label>
    <input :value="modelValue" @input="emitValue" :id="htmlId" :class="isDisabled" :disabled="isOff" :type="inputType" class="py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light lg:text-base" />
    <p v-if="validate(value) === 1" class="text-sm font-light mb-1 lg:text-base text-green-general">Value is valid.</p>
    <p v-if="validate(value) === -1" class="text-sm font-light mb-1 lg:text-base text-red-400">Value is invalid. Please correct.</p>
  </div>
</template>

<script>
export default {
  // @input="$emit('update:modelValue', $event.target.value)" :value="modelValue"
  name: 'Invoice Attribute Input',
  data() {
    return {
      value: null,
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
      if (this.inputType === 'text') {
        if (val) {
          return val.length > 2 ? 1 : -1;
        }
        return 0;
      }
      if (this.inputType === 'email') {
        if (val) {
          return val.length > 7 ? 1 : -1;
        }
        return 0;
      }
      if (this.inputType === 'date') {
        if (val) {
          return 1;
        }
        return 0;
      }
      return 0;
    },
    emitValue(event) {
      if (event.target.value.length > 0) {
        this.value = event.target.value;
        this.$emit('update:modelValue', event.target.value);
        this.$emit('isValid', this.validate(event.target.value));
      }
    },
  },
};
</script>
