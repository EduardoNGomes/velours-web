<script setup lang="ts">
</script>

<template>
  <header id="header" class="w-full bg-gray-2 flex justify-between p-2 text-gray-7 items-baseline">
    <div>
      <h1 class="text-gray-7 font-header text-2xl">Your List</h1>
    </div>
    <ul class="flex gap-1">
      <li class="uppercase font-bold">sair</li>
    </ul>

  </header>
  <RouterView />
</template>

<style scoped>

</style>
