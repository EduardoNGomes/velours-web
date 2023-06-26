<script  lang="ts">
  import {PhArrowLeft} from '@phosphor-icons/vue'
  import router from '@/router';
  export default {
    data(){
      return {}
    },
    components:{
      PhArrowLeft
    },
    props:{
      title: String
    },
    methods:{
      handleBack(){
        router.push('/')
      }
    }
  }
</script>

<template>
    <nav class="flex w-full items-center text-gray-4 text-2xl p-5">
      <button class="justify-self-start w-fit" @click="handleBack">
        <PhArrowLeft />
      </button>
      <h1 class=" uppercase text-center w-full ">{{title}}</h1>
      <div class="w-2 h-2"></div>
    </nav>
</template>