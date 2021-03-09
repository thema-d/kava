<template>
  <div class="grid grid-cols-12 gap-x-4">
    <div
      class="col-span-2 flex focus-within:border-light-primary border rounded-md px-2 space-x-1"
    >
      <span
        class="text-light-primary font-semibold text-xl flex items-center h-full"
        >&euro;</span
      >
      <input
        class="search w-full py-2 px-3 text-gray-500 focus:outline-none"
        type="text"
        placeholder="Amount"
        @keyup.enter="save({ attr: 'amount', value: $event.target.value })"
      />
    </div>
    <div
      class="col-span-3 flex focus-within:border-light-primary border rounded-md px-2 space-x-1"
    >
      <date-picker
        class="w-full"
        @input="value => save({ attr: 'delivery_date', value })"
      >
        <input
          class="search w-full py-2 px-1 text-gray-500 focus:outline-none focus:border-light-primary"
          type="text"
          readonly
          placeholder="Delivery Date"
        />
      </date-picker>
      <span
        class="text-light-primary font-semibold text-xl flex items-center h-full px-2"
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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </span>
    </div>
    <div
      class="col-span-3 relative flex focus-within:border-light-primary border rounded-md px-2 space-x-1"
    >
      <time-picker
        class="w-full"
        @input="value => save({ attr: 'delivery_time', value })"
      >
        <template #default="{ actions, value }">
          <input
            class="search w-full py-2 px-1 text-gray-500 focus:outline-none focus:border-light-primary"
            type="text"
            placeholder="Delivery Time"
            @keypress.prevent="e => e.preventDefault()"
            @focus="actions.open()"
            :value="value"
            readonly
          />
        </template>
      </time-picker>
      <span
        class="text-light-primary font-semibold text-xl flex items-center h-full px-2"
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </div>
    <div
      class="col-span-4 relative flex focus-within:border-light-primary border rounded-md px-2 space-x-1"
    >
      <span
        class="text-light-primary font-semibold text-xl flex items-center h-full"
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </span>
      <input
        class="search w-full py-2 px-1 text-gray-500 focus:outline-none focus:border-light-primary"
        type="text"
        placeholder="Message"
        @keyup.enter="save({ attr: 'message', value: $event.target.value })"
      />
    </div>
  </div>
</template>
<script>
import DatePicker from "@/components/DatePicker";
import TimePicker from "@/components/TimePicker";
import { mapActions } from "vuex";
export default {
  components: {
    DatePicker,
    TimePicker
  },
  methods: mapActions({ save: "persistManyCellsValueAtOnce" })
};
</script>
<style lang="scss" scoped>
input::placeholder {
  @apply text-sm text-gray-300 font-semibold;
}
</style>
