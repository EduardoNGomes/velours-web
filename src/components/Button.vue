<script setup lang="ts">
  import type { PropType } from 'vue';

  const props = defineProps({
    title: {
      type: String ,
      required: true,
    },
    handleClick:{
      type: Function as ()=>void,
      required: true,
    }
  })

</script>

<template>
  <button 
    type="button" 
    class="w-full border rounded-full uppercase font-bold text-sm text-gray-2 border-gray-1 px-5 py-2" 
    @click="props.handleClick">
    {{props.title}}
  </button>
</template>