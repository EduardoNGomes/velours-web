<script setup lang="ts">
  import { useCookies } from '@vueuse/integrations/useCookies'

  const cookies = useCookies(['Cookie'])

  function handleLogout(){
    const logout = confirm('Deseja sair da aplicação?')
    if(logout){
      cookies.remove('token')
      window.location.reload()
    }
  }
</script>

<template>
  <header v-if="cookies.get('token')" class="w-full bg-gray-7   rounded-b-2xl border ">
    <div class="md:max-w-screen-md flex justify-between p-3 text-gray-2 items-baseline mx-auto">
      <div>
        <h1 class="text-gray-2 font-header text-2xl">Your List</h1>
      </div>
      <ul  class="flex gap-1">
        <li class="uppercase font-bold hover:text-gray-3" @click="handleLogout">sair</li>
      </ul>
    </div>
  </header>
  <header v-else class="w-full bg-gray-7  flex items-center justify-center p-3 text-gray-2  rounded-b-2xl border ">
    <div>
      <h1 class="text-gray-2 font-header text-2xl">Your List</h1>
    </div>
  </header>
  <div class="md:max-w-screen-md mx-auto">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
