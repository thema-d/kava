<template>
  <div>
    <slot>
      <input
        :value="value"
        readonly
        ref="input"
        placeholder="YYYY-MM-DD"
        class="focus:outline-none border border-transparent w-32 rounded-sm text-gray-400 text-sm hover:bg-gray-200 bg-transparent"
      />
    </slot>
  </div>
</template>

<script>
import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";

export default {
  props: {
    value: {},
    format: { default: () => "DD-MM-YYYY" },
    options: { default: () => {} }
  },
  mounted() {
    let field = this.$slots?.default?.[0]?.elm ?? this.$refs.input;
    const picker = new Pikaday({
      field,
      format: this.format,
      onSelect: () => {
        this.$emit("input", picker.toString());
      },
      ...this.options
    });
  }
};
</script>
