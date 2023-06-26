<script lang="ts">
  import LogoAPP from '@/components/icons/IconLogo.vue'
  import ProductCard from '@/components/ProductCard.vue';
  import Button from '@/components/Button.vue';
import { defineComponent } from 'vue';
import router from '@/router';
  interface Item {
      id: string
      name:string,
      description:string,
      price:number,
      img:string ,
      selectedImage?:File | null
  }

  export default defineComponent({
    data(){
      return {
        items:  [] as Item[]
      }
    },
    components:{
      LogoAPP,
      ProductCard,
      Button
    },
    methods:{
      handleCreate(){
        router.push('/create')
      }
    },
    async mounted(){
      const response = [
        {
          id:'1',
          name:'Produto de test',
          description:'Produto de test description',
          price:20,
          img:'/images/tomioka.jpeg',
        },
        {
          id:'2',
          name:'Produto de test',
          description:'Produto de test description',
          price:20,
          img:'/images/tomioka.jpeg',
        }
      ]
      this.items = response
    }
  })
</script>

<template>
  <main class="h-screen bg-gray-2 flex flex-col items-center p-2 gap-5">
    <LogoAPP class="w-64 h-64"/>
    <div class="w-full flex items-center justify-center flex-col gap-3 border border-transparent pb-4 border-b-gray-7 ">
      <h2 class="capitalize font-bold text-gray-6 w-fit self-start">Seus produtos</h2>
      <Button :functionType="'create'" :title="'novo produto'" :handle-click="handleCreate"/>
    </div>
    <ProductCard  v-for="item in items" :key="item.id" :item=" item "/>
  </main>
</template>
