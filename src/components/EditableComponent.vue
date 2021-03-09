<template>
  <div
    class="py-px px-1 border-2 border-transparent focus:border-light-primary rounded-sm outline-none flex items-center"
    @mouseenter="toggleEditable($event.target, true)"
    @blur="setValue"
    @keypress.enter="setValue"
    v-text="value"
  ></div>
</template>
<script>
export default {
  props: {
    value: {},
    save: {
      type: Function,
      required: true
    }
  },
  methods: {
    setValue(event) {
      this.save(event.target.innerText);
      this.toggleEditable(event.target, false);
    },
    toggleEditable(target, value = true) {
      target.contentEditable = value;
    }
  }
};
</script>
