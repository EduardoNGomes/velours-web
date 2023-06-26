<script setup lang="ts">
  import { PhUser, PhEnvelopeSimple } from '@phosphor-icons/vue';
  import { ref } from 'vue';
  import Button from '@/components/Button.vue';

  const email = ref('')
  const password = ref('')

  function handleClick() {
    if(email.value.length === 0 || password.value.length === 0){
      return alert('Preencha todos os dados')
    }
  }
</script>

<template>
  <form class="bg-gray-7 rounded-xl w-5/6 p-5 mt-10 mx-auto flex flex-col gap-2">
    <!--Name -->
    <div class="relative flex flex-col gap-1">
      <label for="email" class="ml-2 text-sm font-bold text-gray-1">
        Nome:
      </label>
      <Ph-User :size="18" class="absolute bottom-3 left-3 text-gray-3" />
      <input
        type="email"
        name="email"
        id="email"
        class="rounded-full border border-gray-3 py-2 pl-8 pr-2 text-gray-2 outline-gray-3 focus:outline-gray-1"
        placeholder="digite o email para login"
        v-model="email"
      />
  </div>
  <!--password -->
  <div class="relative flex flex-col gap-1">
    <label for="password" class="ml-2 text-sm font-bold text-gray-1" >
      senha:
    </label>
    <PhEnvelopeSimple :size="18" class="absolute bottom-3 left-3 text-gray-3"/>
    <input
      type="password"
      name="password"
      id="password"
      class="rounded-full border border-gray-3 py-2 pl-8 pr-2 text-gray-2 outline-gray-3 focus:outline-gray-1"
      placeholder="digite o nome do produto"
      v-model="password"
    />
  </div>
  <Button :handleClick="handleClick" :functionType="'login'" :title="'login'"/>
  <router-link to="/signup" class="text-center">criar uma conta</router-link>
  
    
  </form>
</template>
