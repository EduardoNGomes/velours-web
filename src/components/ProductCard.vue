<script lang="ts">
  import router from '@/router';
  import { ref, type PropType } from 'vue';
  interface Item {
      id: string
      name:string,
      description:string,
      price:number,
      img:string ,
      selectedImage?:File | null
  }
  export default {
    data() {
      return {
        formatePrice:'',
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
    }
    },
    mounted(){
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
    <img :src="item.img"  alt="" class="w-10 h-10 object-cover rounded-full justify-self-start">
    <p class="text-lg w-full pl-5 border-l-2 ">{{ item.name }}</p>
    <p class="text-base">{{formatePrice}}</p>
  </div>
</template>
