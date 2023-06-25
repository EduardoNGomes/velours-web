<script setup lang="ts">
  import router from '@/router';
import {PhCheck,PhCircle} from '@phosphor-icons/vue'
import type { PropType } from 'vue';
  interface Item {
    id: string
    img:string,
    title:string,
    check:boolean
  }

  const props = defineProps({
    item: {
      type: Object as PropType<Item> ,
      required: true,

    }
  })

  function handleNavigate(id:string){
    router.push(`/detail/${id}`)
  }
</script>

<template>
  <div class="rounded-md border border-gray-5 p-3 flex items-center w-full  text-gray-7 gap-4" @click="handleNavigate(props.item.id)">
    <img :src="props.item.img"  alt="" class="w-10 h-10 object-cover rounded-full justify-self-start">
    <p class="text-lg w-full pl-5 border-l-2 ">{{ props.item.title }}</p>
    <PhCheck  v-if="item.check" class="text-3xl"/>
    <ph-circle v-else="!props.item.check" class="text-3xl"/>
  </div>
</template>
