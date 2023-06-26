<script setup lang="ts">
import LogoAPP from '@/components/icons/IconLogo.vue'
import ProductCard from '@/components/ProductCard.vue';
const items = [
  {
    id:'1',
    img:'/images/tomioka.jpeg',
    title:'Produto de test',
    check: true 
  }
]
</script>

<template>
  <main class="h-screen bg-gray-2 flex flex-col items-center p-2 gap-5">
    <LogoAPP class="w-64 h-64"/>
    <div class="">
      <h2 class="capitalize font-bold text-gray-6">Seus produtos</h2>
    </div>
    <ProductCard  v-for="item in items" :key="item.id" :item=" item "/>
  </main>
</template>
