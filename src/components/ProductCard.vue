<script lang="ts">
  import router from '@/router';
  import {  type PropType } from 'vue';
  import { useCookies } from '@vueuse/integrations/useCookies'
  interface Item {
      id: string
      name:string,
      description:string,
      price:number,
      coverUrl:string ,
      selectedImage?:File | null
  }
  export default {
    data() {
      return {
        cookies: useCookies(['Cookie']),
        formatePrice:'',
        imageUrl: `${import.meta.env.VITE_API}/products/image/${this.item.coverUrl}`
      }
    },
    props:{
      item: {
        type: Object as PropType<Item> ,
        required: true,
    }
    },
    methods: {
      handleNavigate(id:string){
        router.push(`/detail/${id}`)
      },
    },
    async mounted(){
      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });      
      this.formatePrice = formatter.format(this.item.price);
    }
  }
</script>

<template>
  <div class="rounded-md border border-gray-5 p-3 flex items-center w-full  text-gray-7 gap-4" @click="handleNavigate(item.id)">
    <img :src="imageUrl"  alt="" class="w-10 h-10 rounded-full justify-self-start">
    <p class="text-lg w-full pl-5 border-l-2 ">{{ item.name }}</p>
    <p class="text-base">{{formatePrice}}</p>
  </div>
</template>
