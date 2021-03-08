<template>
  <on-click-outside :do="() => (isOpen = false)">
    <div class="relative h-full">
      <div class="w-full rounded-md relative h-full">
        <slot name="trigger" :actions="{ open, close }"></slot>
      </div>

      <div
        v-show="isOpen"
        class="absolute mt-px w-full bg-white shadow-lg rounded border"
      >
        <ul
          tabindex="-1"
          role="listbox"
          class="text-base leading-6 overflow-auto relative z-50 bg-white"
          v-if="data.length"
        >
          <li
            tabindex="0"
            role="option"
            v-for="row in data"
            :key="row.id"
            class="cursor-pointer px-2 hover:bg-gray-200 focus:outline-none border-2 border-transparent rounded-sm focus:bg-gray-100"
            @click.stop="select(row) && (isOpen = !closeOnSelect)"
          >
            <slot name="row" :row="row"></slot>
          </li>
        </ul>
        <ul v-else class="py-1 text-base leading-6 overflow-auto">
          <li class="text-gray-400 flex justify-center font-bold py-2 px-3">
            {{ "No results found." }}
          </li>
        </ul>
      </div>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from "@/components/OnClickOutside";
export default {
  components: {
    OnClickOutside
  },
  props: {
    data: { type: Array, required: true },
    select: { type: Function, required: true },
    closeOnSelect: { type: Boolean, default: () => false }
  },
  data: () => ({
    isOpen: false,
    loading: null
  }),
  methods: {
    close() {
      this.isOpen = false;
    },
    open() {
      this.isOpen = true;
    }
  }
};
</script>
