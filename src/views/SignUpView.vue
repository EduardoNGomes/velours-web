<script setup lang="ts">
  import { PhUser, PhEnvelopeSimple } from '@phosphor-icons/vue';
  import { ref } from 'vue';
  import Button from '@/components/Button.vue';
  import router from '@/router';
  import { api } from '@/axios';

  const name = ref('')
  const email = ref('')
  const password = ref('')
  const loading = ref(false)
  
  async function handleClick() {
    loading.value = true
    if(email.value.length === 0 || password.value.length === 0 || name.value.length === 0){
      loading.value = false
      return alert('Preencha todos os dados')
    }
    if(password.value.length < 8 ){
      loading.value = false
      return alert('Sua senha deve conter no minimo 8 caracteres')
    }

    try {
      const response = await api.post('/users',{
        name: name.value,
        email: email.value,
        password: password.value
      })

      alert(response.data)
      router.push('/')

    } catch (error) {
      loading.value = false
      console.log(error)
    }

  }
</script>

<template>
  <form class="bg-gray-7 rounded-xl w-5/6 p-5 mt-10 mx-auto flex flex-col gap-2 md:max-w-screen-md">
    <!--Name -->
    <div class="relative flex flex-col gap-1">
      <label for="name" class="ml-2 text-sm font-bold text-gray-1">
        Nome:
      </label>
      <Ph-User :size="18" class="absolute bottom-3 left-3 text-gray-3" />
      <input
        type="text"
        name="name"
        id="name"
        class="rounded-full border border-gray-3 py-2 pl-8 pr-2 text-gray-2 outline-gray-3 focus:outline-gray-1"
        placeholder="digite o name para login"
        v-model="name"
      />
    </div>
    <!--Email -->
    <div class="relative flex flex-col gap-1">
      <label for="email" class="ml-2 text-sm font-bold text-gray-1">
        Email:
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
        placeholder="digite sua senha"
        min="8"
        v-model="password"
      />
    </div>
    <Button v-if="loading === false" :handleClick="handleClick" :functionType="'login'" :title="'cadastra'"/>
    <Button v-if="loading === true" :handleClick="handleClick" :functionType="'loading'" :title="'loading'"/>
    <router-link to="/" class="text-center">voltar</router-link>

  </form>
</template>
