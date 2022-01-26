<template>
  <label class="checkbox">
    <input type="checkbox" :value="inputValue" v-model="model" />
    <span class="checkmark" />
    <span class="text">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    label: String,
    value: Array,
    inputValue: String,
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.text {
  font-size: 12px;
  line-height: 16px;
  padding-left: 12px;
}

.checkbox input {
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  display: block;
  height: 12px;
  width: 12px;
  border: 1px solid #b9b9b9;
  border-radius: 2px;
}

.checkbox:hover input ~ .checkmark {
  background-color: #55bb06;
  border: 1px solid #55bb06;
  height: 12px;
  width: 12px;
  border: none;
}

.checkbox input:checked ~ .checkmark {
  position: relative;
  background-color: #55bb06;
  border: 1px solid #55bb06;
  height: 12px;
  width: 12px;
  border: none;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  left: 4px;
  top: 1px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
