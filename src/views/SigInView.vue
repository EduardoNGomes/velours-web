<script setup lang="ts">
  import { PhUser, PhEnvelopeSimple } from '@phosphor-icons/vue';
  import { ref } from 'vue';
  import Button from '@/components/Button.vue';
  import {api} from '@/axios'
  import { useCookies } from '@vueuse/integrations/useCookies'


  const email = ref('')
  const password = ref('')
  const loading = ref(false)
  const cookies = useCookies(['Cookie'])

  async function handleClick() {
    loading.value = true

    if(email.value.length === 0 || password.value.length === 0){
      loading.value = false
      return alert('Preencha todos os dados')
    }

    try {
      const response = await api.post('/auth',{
        email: email.value,
        password: password.value
      },
      )

      
      if(response.status === 200 && loading.value === true){
        cookies.set('token',response.data.token, 
        {
          sameSite:'none',secure:true,path:'/',expires:new Date(Date.now() + 24 * 60 * 60 * 1000)
        })
        alert(response.data.message)
        window.location.reload()
      }

    } catch (error) {
      alert('Não foi possível realizar o login')
      loading.value = false
      console.log(error)
    }
    
  }
</script>

<template>
  <form class="bg-gray-7 rounded-xl w-5/6 p-5 mt-10 mx-auto flex flex-col gap-2 md:max-w-screen-sm">
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
  <Button v-if="loading === false" :handleClick="handleClick" :functionType="'login'" :title="'login'"/>
  <Button v-if="loading === true" :handleClick="handleClick" :functionType="'loading'" :title="'loading'"/>

  <router-link to="/signup" class="text-center">criar uma conta</router-link>
  
    
  </form>
</template>
