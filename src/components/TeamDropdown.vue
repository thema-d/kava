<template>
  <div>
    <dropdown
      :data="teams"
      :select="({ id: team_id, selected }) => select({ team_id, selected })"
    >
      <template #trigger="{ actions }">
        <button
          @click="actions.open()"
          class="h-full border text-left rounded-md w-full py-2 px-3 text-gray-500 focus:outline-none focus:border-light-primary"
        >
          <span v-if="selectedTeams.length" class="flex space-x-1">
            <span
              class="py-px px-1 bg-light-primary text-white rounded"
              v-for="team in selectedTeams"
              :key="team.id"
              >{{ team.name }}</span
            >
          </span>
          <span v-else class="py-px">
            Teams
          </span>
        </button>
        <div
          class="absolute right-0 top-0 flex items-center h-full mr-3 pointer-events-none"
        >
          <svg
            class="h-5 w-5 text-light-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </template>
      <template #row="{ row }">
        <div class="flex row-entry font-semibold text-gray-500 items-center">
          <span class="py-2 px-2 w-full">{{ row.name }}</span>
          <svg
            v-if="row.selected"
            class="w-6 h-6 text-light-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
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
  computed: {
    ...mapState(["teams"]),
    selectedTeams() {
      return this.teams.filter(_ => _.selected);
    }
  },
  methods: mapActions({ select: "selectEmployeesFromTeam" })
};
</script>
<style lang="scss" scoped>
button {
  @apply text-gray-400 font-semibold text-sm;
}
</style>
