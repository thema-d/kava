<template>
  <div
    class="home w-10/12 mx-auto my-8 py-8 px-12 rounded-lg border shadow-sm bg-white"
  >
    <div>
      <span
        class="font-extrabold text-2xl text-gray-500 text-opacity-90 text-left"
      >
        Search and Customize from Employees List
      </span>
    </div>
    <div class="mt-8">
      <span class="text-sm font-medium text-gray-400"
        >You could customize vouchers either individually or perform a mass
        action.</span
      >
    </div>
    <div class="flex space-x-4 my-4" v-if="isBulkEditing">
      <bulk-edit-form />
    </div>
    <div class="flex space-x-4 my-4" v-else>
      <employee-dropdown class="w-2/3" />
      <team-dropdown class="w-1/3" />
    </div>
    <div class="my-3">
      <employee-table
        @toggle-bulk-edit="value => (isBulkEditing = value)"
        :data="selectedEmployees"
        :headers="headers"
      ></employee-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import EmployeeDropdown from "@/components/EmployeeDropdown";
import TeamDropdown from "@/components/TeamDropdown";
import EmployeeTable from "@/components/employees/Table";
import BulkEditForm from "@/components/employees/BulkEditForm";

export default {
  name: "Home",
  components: {
    EmployeeDropdown,
    TeamDropdown,
    EmployeeTable,
    BulkEditForm
  },
  data: () => ({
    isBulkEditing: false,
    headers: [
      { label: "To" },
      { label: "Email" },
      { label: "Amount" },
      { label: "Language" }
    ]
  }),
  computed: mapState(["selectedEmployees"])
};
</script>
