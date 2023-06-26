<script setup lang="ts">
  import {PhArrowLeft} from '@phosphor-icons/vue'
  import router from '@/router';

  const props = defineProps({
    title: String
  })
  function handleBack(){
        router.push('/')
      }
</script>

<template>
    <nav class="flex w-full items-center text-gray-4 text-2xl p-5">
      <button class="justify-self-start w-fit" @click="handleBack">
        <ph-arrow-left   />
      </button>
      <h1 class=" uppercase text-center w-full">{{props.title}}</h1>
    </nav>

</template>