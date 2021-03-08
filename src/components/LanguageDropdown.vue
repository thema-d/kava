<template>
  <div>
    <dropdown
      :data="languages"
      :select="data => $emit('input', data.code)"
      :close-on-select="true"
    >
      <template #trigger="{ actions }">
        <span
          class="flex items-center justify-between py-px cursor-pointer"
          @click="actions.open()"
        >
          {{ value }}
          <span>
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </span>
      </template>
      <template #row="{ row }">
        <div class="flex row-entry font-semibold text-gray-500">
          <span class="py-2 px-2 w-full">{{ row.code }}</span>
        </div>
      </template>
    </dropdown>
  </div>
</template>
<script>
import Dropdown from "@/components/DropdownComponent";
export default {
  components: {
    Dropdown
  },
  props: ["value"],
  data: () => ({
    languages: [
      { code: "NL", name: "Netherlands" },
      { code: "EN", name: "English" },
      { code: "FR", name: "France" }
    ]
  })
};
</script>
<style lang="scss" scoped>
input.search {
  &::placeholder {
    @apply text-gray-400 font-semibold text-sm;
  }
}
</style>
