<script setup lang="ts">
  import { PhPencil, PhPlus,PhTrash  } from '@phosphor-icons/vue';

  const props = defineProps({
    functionType:{
      type: String as () => 'update' | 'delete' | 'create',
      required: true,
    },
    title: {
      type: String,
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
    v-if="props.functionType == 'update'"
    type="button" 
    class="w-full border rounded-full uppercase font-bold text-sm text-gray-7 border-green-dark px-4 py-2 bg-green-dark flex items-center justify-center gap-2" 
    @click="props.handleClick">
    <PhPencil class="text-base"/>
    {{props.title}}
  </button>
  <button 
    v-if="props.functionType == 'delete'"
    type="button" 
    class="w-full border rounded-full uppercase font-bold text-sm text-gray-7 border-red-dark px-5 py-2 bg-red-dark flex items-center justify-center gap-2" 
    @click="props.handleClick">
    <PhTrash class="text-base"/>
    {{props.title}}
  </button>
  <button 
    v-if="props.functionType == 'create'"
    type="button" 
    class="w-full border rounded-full uppercase font-bold text-sm text-gray-7 border-gray-1 px-5 py-2 bg-gray-1 flex items-center justify-center gap-2" 
    @click="props.handleClick">
    <PhPlus class="text-base"/>
    {{props.title}}
  </button>
</template>