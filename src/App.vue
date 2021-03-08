<template>
  <div id="app" class="bg-gray-100 grid grid-cols-5 min-h-screen">
    <!-- <aside class="col-span-1 bg-white shadow-sm rounded-r-3xl border-r"></aside> -->
    <div class="col-span-5">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Raleway", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
