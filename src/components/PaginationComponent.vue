<template>
  <div class="py-4 px-6 rounded flex justify-center items-center">
    <div class="prev cursor-pointer" @click="prev">
      <svg
        class="w-5 h-5 text-gray-400 hover:text-light-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <div class="flex space-x-2 font-bold text-gray-400">
      <span class="text-light-primary">{{ currentPage }}</span>
      <span>of</span>
      <span>{{ pageSize }}</span>
    </div>
    <div class="next cursor-pointer" @click="next">
      <svg
        class="w-5 h-5 text-gray-400 hover:text-light-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    currentPage: { type: Number, required: true },
    pageSize: { type: Number, required: true },
    next: { type: Function, required: true },
    prev: { type: Function, required: true }
  }
};
</script>
