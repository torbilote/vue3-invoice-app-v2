<template>
  <div class="mt-3 flex flex-col">
    <label :for="htmlId" class="text-sm text-white font-extralight mb-1 lg:text-base"> {{ labelText }}</label>
    <input @input="$emit('update:modelValue', $event.target.value)" v-if="this.$props.htmlType === 'input'" :id="htmlId" :type="inputType" :value="modelValue" :class="isHtmlDisabled" class="py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light lg:text-base" :disabled="htmlDisabled" />
    <select @input="$emit('update:modelValue', $event.target.value)" v-else-if="this.$props.htmlType === 'select'" :id="htmlId" :value="modelValue" :class="isHtmlDisabled" class="py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light lg:text-base" :disabled="htmlDisabled">
      <template v-if="this.$props.selectType === 'country'">
        <option value="Country" selected disabled>*Select country*</option>
        <option value="France">France</option>
        <option value="Poland">Poland</option>
        <option value="Spain">Spain</option>
      </template>
      <template v-else>
        <option value="Terms" selected disabled>*Select terms*</option>
        <option value="Payment30">Payment in 30 days</option>
        <option value="Payment60">Payment in 60 days</option>
      </template>
    </select>
    <textarea @input="$emit('update:modelValue', $event.target.value)" v-else :id="htmlId" rows="5" maxlength="150" :value="modelValue" :class="isHtmlDisabled" class="resize-none py-0.5 px-1 text-white text-sm rounded-md border border-gray-800 font-light lg:text-base" :disabled="htmlDisabled"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Invoice Attribute',
  props: {
    htmlType: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: false,
    },
    selectType: {
      type: String,
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
    htmlDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelValue: {
      type: [String, Number, Date],
      required: false,
      default: '',
    },
  },
  computed: {
    isHtmlDisabled() {
      return {
        'bg-blue-attributes': !this.$props.htmlDisabled,
        'bg-gray-500': this.$props.htmlDisabled,
      };
    },
  },
};
</script>
