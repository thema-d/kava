<template>
  <div>
    <dropdown :data="filteredEmployees" :select="data => select(data)">
      <template #trigger="{ actions }">
        <input
          class="search border-2 rounded-md w-full py-2 px-3 text-gray-500 focus:outline-none focus:border-red-300"
          type="text"
          placeholder="Search Employees"
          v-model="query"
          @keypress="actions.open()"
        />
        <div
          class="absolute right-0 top-0 flex items-center h-full mr-3 pointer-events-none"
        >
          <svg
            class="h-5 w-5 text-red-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </template>
      <template #row="{ row }">
        <div class="flex row-entry font-semibold text-gray-500">
          <span class="py-2 px-2 w-full"
            >{{ row.first_name }} {{ row.last_name }}</span
          >
          <span class="py-2 px-2 w-full">{{ row.email }}</span>
          <span class="py-2 px-2 w-full">{{ row.language }}</span>
        </div>
      </template>
    </dropdown>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

import Dropdown from "./DropdownComponent";

export default {
  components: {
    Dropdown
  },
  data: () => ({ query: null }),
  computed: {
    ...mapState(["employees"]),
    filteredEmployees() {
      if (!this.query) return [];

      let query = this.query.toLowerCase();
      return this.employees
        .filter(
          d =>
            `${d.first_name} ${d.last_name}`.toLowerCase().includes(query) ||
            d.email.toLowerCase().includes(query)
        )
        .slice(0, 10);
    }
  },
  methods: mapActions({ select: "selectEmployee" })
};
</script>
<style lang="scss" scoped>
input.search {
  &::placeholder {
    @apply text-gray-400 font-semibold text-sm;
  }
}
</style>
