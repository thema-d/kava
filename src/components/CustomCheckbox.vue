<template>
  <div
    class="checkbox bg-white border-4 rounded-full flex items-center justify-center focus:outline-none focus:ring ring-blue-200 cursor-pointer hover:bg-gray-100"
    :class="{ [size]: true }"
    role="checkbox"
    tabindex="0"
    :value="value"
    @click="toggle"
    @keypress.space.prevent="toggle"
    :aria-checked="value.toString()"
  ></div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: () => false
    },
    size: {
      type: String,
      default: () => "small"
    }
  },
  methods: {
    toggle() {
      this.$emit("input", !this.value);
    }
  }
};
</script>
<style lang="scss" scoped>
.checkbox {
  @apply border-gray-300;
  &[aria-checked="true"] {
    @apply border-light-primary;
    &::after {
      content: "";
      @apply h-1/2 w-1/2 bg-light-primary rounded-full;
    }
  }
  &.large {
    @apply h-10 w-10;
  }
  &.medium {
    @apply h-8 w-8;
  }
  &.small {
    @apply h-5 w-5;
  }
}
</style>
