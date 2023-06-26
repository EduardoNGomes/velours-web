<script setup lang="ts">
</script>

<template>
  <header class="w-full bg-gray-7  flex justify-between p-3 text-gray-2 items-baseline rounded-b-2xl border overflow-hidden">
    <div>
      <h1 class="text-gray-2 font-header text-2xl">Your List</h1>
    </div>
    <ul class="flex gap-1">
      <li class="uppercase font-bold">sair</li>
    </ul>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
