<script setup lang="ts">
  import { PhPencil, PhPlus,PhTrash,PhSignIn,PhHandPalm  } from '@phosphor-icons/vue';

  const props = defineProps({
    functionType:{
      type: String as () => 'update' | 'delete' | 'create' | 'login' | 'loading',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    handleClick:{
      type: Function as () => unknown,
      required: true,
    }
  })

</script>

<template>
  <button 
    v-if="props.functionType == 'update'"
    type="button" 
    class="w-full border rounded-full uppercase font-bold text-sm text-gray-7 border-green-dark px-4 py-2 bg-green-dark flex items-center justify-center gap-2 hover:brightness-150" 
    @click="props.handleClick">
    <PhPencil class="text-base"/>
    {{props.title}}
  </button>
  <button 
    v-if="props.functionType == 'delete'"
    type="button" 
    class="w-full border rounded-full uppercase font-bold text-sm text-gray-7
     border-red-dark px-5 py-2 bg-red-dark flex items-center justify-center gap-2 hover:brightness-150" 
    @click="props.handleClick">
    <PhTrash class="text-base"/>
    {{props.title}}
  </button>
  <button 
    v-if="props.functionType == 'create'"
    type="button" 
    class="w-full border rounded-md uppercase font-bold text-sm text-gray-7 border-gray-7 p-3 bg-gray-1 flex items-center justify-center gap-2
    hover:brightness-150" 
    @click="props.handleClick">
    <PhPlus class="text-lg"/>
    {{props.title}}
  </button>
  <button 
    v-if="props.functionType == 'login'"
    type="button" 
    class="w-full border rounded-md uppercase font-bold text-sm text-gray-7 border-gray-7 p-3 bg-gray-1 flex items-center justify-center gap-2 hover:brightness-150" 
    @click="props.handleClick">
    <PhSignIn  weight="light" />
    {{props.title}}
  </button>

  <button 
    v-if="props.functionType == 'loading'"
    type="button" 
    disabled
    class="w-full border rounded-md uppercase font-bold text-sm
     text-gray-7 border-gray-7 p-3 bg-gray-1 flex items-center justify-center gap-2 cursor-wait opacity-50">
    <PhHandPalm class="text-lg" />
    {{props.title}}
  </button>
</template>