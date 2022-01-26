<template>
  <div class="filter">
    <h3 class="filter__title">{{ title }}</h3>
    <ul class="filter__options">
      <ResetSelectionIcon
        class="filter__reset-selection"
        @click="resetSelection"
      />
      <li class="filter__option" v-for="option in options" :key="option.id">
        <Checkbox
          :label="option.text"
          :inputValue="option.key"
          v-model="checked"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Checkbox from '@/components/atoms/Checkbox';
import ResetSelectionIcon from '@/assets/icons/reset-selection.svg';
export default {
  name: 'FilterBlock',
  components: {
    Checkbox,
    ResetSelectionIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    checked() {
      this.$emit('checked', this.checked);
    },
  },
  data() {
    return {
      checked: [],
    };
  },
  methods: {
    resetSelection() {
      this.checked = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 12px 15px 12px 12px;
  position: relative;
  width: 100%;
  margin-bottom: 12px;
  &__title {
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 12px;
    margin: 0;
  }
  &__options {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: flex-start;
    list-style-type: none;
    padding: 0;
    width: 100%;
  }
  &__option {
    width: 100%;
  }
  &__reset-selection {
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;
    color: #b9b9b9;
    &:hover {
      color: #7384e4;
    }
  }
}
</style>
