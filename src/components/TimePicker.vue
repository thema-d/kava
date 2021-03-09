<template>
  <on-click-outside :do="() => (isOpen = false)">
    <div class="relative">
      <slot :actions="{ open: () => (isOpen = true) }" :value="formattedTime">
        <input
          type="text"
          :value="formattedTime"
          placeholder="HH:MM"
          readonly
          @keypress.prevent="e => e.preventDefault()"
          @focus="isOpen = true"
          class="focus:outline-none border border-transparent w-24 rounded-sm text-gray-400 text-sm hover:bg-gray-200 bg-transparent"
        />
      </slot>
      <div v-if="isOpen" class="absolute w-full">
        <div class="flex relative z-50 shadow-xl border rounded py-px bg-white">
          <div
            class="flex flex-col h-56 w-full overflow-y-scroll text-gray-500"
          >
            <button
              class="py-2 px-4 bg-white focus:outline-none hover:bg-light-primary hover:text-white font-bold"
              :class="{ 'bg-light-primary text-white': hour == time.hour }"
              v-for="hour in 12"
              :key="'hh' + hour"
              @click="setHour(hour)"
            >
              {{ leadingZero(hour) }}
            </button>
          </div>
          <div
            class="flex flex-col h-56 w-full overflow-y-scroll text-gray-500"
          >
            <button
              class="py-2 px-4 bg-white focus:outline-none hover:bg-light-primary hover:text-white font-bold"
              :class="{ 'bg-light-primary text-white': minute == time.minute }"
              v-for="minute in Array.from({ length: 12 }).map((v, i) => i * 5)"
              :key="'mm' + minute"
              @click="setMinute(minute)"
            >
              {{ leadingZero(minute) }}
            </button>
          </div>
          <div class="flex flex-col h-56 w-full text-gray-500">
            <button
              class="py-2 px-4 bg-white focus:outline-none hover:bg-light-primary hover:text-white font-bold"
              :class="{ 'bg-light-primary text-white': period == time.period }"
              v-for="period in ['AM', 'PM']"
              :key="'mm' + period"
              @click="setPeriod(period)"
            >
              {{ period }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </on-click-outside>
</template>
<script>
import OnClickOutside from "@/components/OnClickOutside";

export default {
  props: ["value"],
  components: {
    OnClickOutside
  },
  data: () => ({
    isOpen: false,
    time: { hour: null, minute: null, period: null }
  }),
  watch: {
    value: {
      immediate: true,
      handler: function() {
        if (this.value) {
          // 04:00 AM
          let [time, period] = this.value.split(" ");
          let [hour, minute] = time.split(":");
          this.time = { hour, minute, period };
        }
      }
    }
  },
  computed: {
    formattedTime() {
      let { hour, minute, period } = this.time;
      if (hour && minute && period) {
        return `${hour}:${minute} ${period}`;
      }
      return null;
    }
  },
  methods: {
    setTime() {
      let { hour, minute, period } = this.time;
      if (hour && minute && period) {
        this.$emit("input", `${hour}:${minute} ${period}`);
      }
    },
    setHour(value) {
      this.time.hour = this.leadingZero(value);
      this.setTime();
    },
    setMinute(value) {
      this.time.minute = this.leadingZero(value);
      this.setTime();
    },
    setPeriod(value) {
      this.time.period = value;
      this.setTime();
    },
    leadingZero(number) {
      return number < 10 ? `0${number}` : number;
    }
  }
};
</script>
<style lang="scss" scoped>
input[type="text"]::placeholder {
  @apply text-gray-400 font-medium text-sm;
}

/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-gray-200;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-light-primary rounded-lg;
  &:hover {
    @apply bg-light-primary;
  }
}
</style>
