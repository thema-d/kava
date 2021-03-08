<template>
  <div class="border rounded shadow-sm">
    <div class="min-w-full divide-y divide-gray-200">
      <div class="flex">
        <div class="pl-3 w-12 flex items-center justify-start">
          <checkbox v-model="selectedAll" :size="'small'" />
        </div>
        <div class="w-full grid grid-cols-12">
          <div
            class="px-px py-4 text-left text-xs font-bold text-red-400 uppercase tracking-wider w-full"
            v-for="(column, idx) in headers"
            :class="columnClasses[idx]"
            :key="column.label"
          >
            {{ column.label }}
          </div>
        </div>
        <div class="w-20"></div>
      </div>
      <div v-if="data.length" class="bg-white divide-y divide-gray-200">
        <div
          v-for="(row, rowIdx) in paginatedData"
          :key="row.id"
          class="hover:bg-gray-50 group"
        >
          <table-row
            :staged="stagedForAction.includes(row.id)"
            :row="row"
            :rowIdx="rowIdx"
            :handleCheckbox="handleCheckbox"
          />
        </div>
        <div>
          <pagination
            :current-page="pagination.currentPage"
            :page-size="pagination.totalPages"
            :next="handleNext"
            :prev="handlePrev"
          />
        </div>
      </div>
      <div v-else class="bg-white divide-y divide-gray-200">
        <div
          class="py-4 px-6 flex justify-center items-center font-bold text-gray-400"
        >
          No data to display yet :(
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import paginate from "jw-paginate";

import Checkbox from "@/components/CustomCheckbox";
import Pagination from "@/components/PaginationComponent";
import TableRow from "@/components/employees/Row";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    Checkbox,
    Pagination,
    TableRow
  },
  props: {
    data: { type: Array, default: () => [] },
    headers: { type: Array, default: () => [] },
    options: {
      perPage: {
        type: Number
      },
      default: () => ({ perPage: 5 })
    }
  },
  data: () => ({
    selectedAll: false,
    columnClasses: ["col-span-4", "col-span-4", "col-span-2", "col-span-2"],
    currentPage: 1,
    pagination: null
  }),
  computed: {
    ...mapState(["stagedForAction"]),
    paginatedData() {
      let { startIndex, endIndex } = this.pagination;
      return this.data.slice(startIndex, endIndex + 1);
    }
  },
  watch: {
    data: {
      immediate: true,
      handler: function() {
        this.initializePagination();
      }
    },
    currentPage() {
      this.initializePagination();
    },
    selectedAll(value) {
      this.setStagedForAction(
        value ? this.paginatedData.map(row => row.id) : []
      );
      this.$emit("toggle-bulk-edit", value);
    }
  },
  methods: {
    ...mapMutations(["setStagedForAction"]),
    handleCheckbox(row, value) {
      if (value && !this.stagedForAction.includes(row.id)) {
        this.stagedForAction.push(row.id);
      } else {
        this.setStagedForAction(
          this.stagedForAction.filter(id => id != row.id)
        );
      }
      this.$emit("toggle-bulk-edit", this.stagedForAction.length > 0);
    },
    handleNext() {
      if (this.currentPage < this.pagination.totalPages) {
        this.currentPage += 1;
        this.selectedAll = false;
      }
    },
    handlePrev() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.selectedAll = false;
      }
    },
    initializePagination() {
      this.pagination = paginate(
        this.data.length,
        this.currentPage,
        this.options.perPage
      );
    }
  }
};
</script>
