<template>
  <div class="flex">
    <div class="pl-3 pt-4 w-12 flex items-center justify-start self-start">
      <checkbox
        :value="staged"
        @input="value => handleCheckbox(row, value)"
        :size="'small'"
      />
    </div>
    <div class="w-full grid grid-cols-12">
      <div
        class="px-px pt-4 pb-2 font-semibold text-sm text-gray-400 col-span-4 w-full"
      >
        <span>{{ row.first_name }} {{ row.last_name }}</span>
      </div>
      <div
        class="px-px pt-4 pb-2 font-semibold text-sm text-gray-400 col-span-4 w-full"
      >
        <span>{{ row.email }}</span>
      </div>
      <div
        class="px-px pt-4 pb-2 font-semibold text-sm text-gray-400 col-span-2 w-full"
      >
        <div class="flex items-center">
          <span class="h-full flex flex-col">€</span>
          <editable
            class="w-24 hover:bg-gray-100"
            :value="row.amount"
            :save="value => save({ id: row.id, attr: 'amount', value })"
          >
          </editable>
        </div>
      </div>
      <div
        class="px-px pt-4 pb-2 font-semibold text-sm text-gray-400 col-span-2 w-full"
      >
        <div class="flex items-center">
          <language-dropdown
            class="w-16 hover:bg-gray-100"
            :value="row.language"
            @input="value => save({ id: row.id, attr: 'language', value })"
          >
          </language-dropdown>
        </div>
      </div>
      <div class="col-span-12 pb-4 grid grid-cols-12">
        <div class="col-span-8">
          <span class="text-red-400 uppercase text-xs font-bold">Message</span>
          <p class="text-sm font-medium text-gray-400 pr-4">
            <editable
              class="w-full hover:bg-gray-100"
              :value="row.message"
              :save="value => save({ id: row.id, attr: 'message', value })"
            >
            </editable>
          </p>
        </div>
        <div class="col-span-2">
          <span class="text-red-400 uppercase text-xs font-bold"
            >Delivery Date</span
          >
          <div>
            <date-picker
              @input="
                value => save({ id: row.id, attr: 'delivery_date', value })
              "
              :value="row.delivery_date"
              :options="{ firstDay: 1 }"
            ></date-picker>
          </div>
        </div>
        <div class="col-span-2">
          <span class="text-red-400 uppercase text-xs font-bold"
            >Delivery Time</span
          >
          <div>
            <time-picker
              @input="
                value => save({ id: row.id, attr: 'delivery_time', value })
              "
              :value="row.delivery_time"
            ></time-picker>
          </div>
        </div>
      </div>
    </div>
    <div class="w-20 flex items-center justify-center">
      <button
        @click="remove(row)"
        class="w-5 h-5 hidden group-hover:text-red-400 group-hover:block focus:outline-none"
      >
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

import Editable from "@/components/EditableComponent";
import DatePicker from "@/components/DatePicker";
import TimePicker from "@/components/TimePicker";
import Checkbox from "@/components/CustomCheckbox";
import LanguageDropdown from "@/components/LanguageDropdown";

export default {
  components: {
    Editable,
    DatePicker,
    TimePicker,
    Checkbox,
    LanguageDropdown
  },
  props: {
    row: { type: Object, required: true },
    handleCheckbox: { type: Function, required: true },
    staged: { type: Boolean, default: () => false }
  },
  methods: mapActions({ save: "persistCellValue", remove: "deselectEmployee" })
};
</script>
