<script lang="ts">
  import NavPages from '@/components/NavPages.vue';
  import Button from '@/components/Button.vue';
  import { useCookies } from '@vueuse/integrations/useCookies'
  import { api } from '@/axios';
  import router from '@/router';

  interface Item {
    name:string,
    description:string,
    price:number,
    img?:string ,
    selectedImage?:File | null
  }
  export default{
    data(){
      return{
        item: {} as Item,
        cookies: useCookies(['Cookie']),
        loading: false
      }
    },
    components:{
      NavPages,
      Button
    },
    methods:{
      handleSelectedImage(event: Event) {
        const file = (event.target as HTMLInputElement).files?.[0];
        this.item.selectedImage = file;
        this.item.img = URL.createObjectURL(file!)
      },
      async handleSendData(){
        this.loading = true
        if(this.item.price <0){
          this.loading = false
          return alert("Escohla um valor acima de 0")
        }
        if(!this.item.description || !this.item.price||!this.item.selectedImage||!this.item.name){
          this.loading = false
          return alert('Preencha todos os campos')
        }
        const form = new FormData();
        form.append('name',this.item.name)
        form.append('price',String(this.item.price))
        form.append('description',this.item.description)
        form.append('image',this.item.selectedImage)

        try {
          const response = await api.post('/products',form, {headers:{
            Authorization: `Bearer ${this.$cookies.get('token')}`
          }})

          alert(response.data)
          router.push('/')
        } catch (error) {
          this.loading = false
          console.log(error)
        }
      },
    },
  }


</script>

<template>
  <div class="h-screen bg-gray-2 flex flex-col items-center ">
    <NavPages :title="'Cadastrar'"/>
    <main class="w-full bg-gray-7 flex-1 rounded-t-3xl">
      <form class="flex w-full flex-col gap-4 p-10">
        <!--IMG -->
        <div class="relative flex flex-col gap-1">
          <label
            for="image"
            class="rounded-full border border-gray-3 py-2 text-center text-sm font-bold text-gray-2 outline-gray-3 focus:outline-gray-1"
          >
            Selecione uma foto
          </label>
          <input
            type="file"
            name="image"
            id="image"
            class="hidden"
            @change="handleSelectedImage"
          />
          <img :src="item.img" v-if="item.img" class="rounded-lg max-h-96 object-cover object-top"/>
        </div>
        <!--Name -->
        <div class="relative flex flex-col gap-1">
          <label for="name" class="ml-1 text-sm font-bold text-gray-1">
            Nome do Produto:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="rounded-full border border-gray-3 py-2 pl-8 pr-2 text-gray-2 outline-gray-3 focus:outline-gray-1"
            placeholder="Digite o nome do produto"
            v-model="item.name"
          />
          
        </div>
        <!--Description -->
        <div class="relative flex flex-col gap-1">
          <label for="description" class="ml-1 text-sm font-bold text-gray-1">
            Descrição do produto:
          </label>
          <textarea 
            name="description"
            id="description"
            class="rounded-3xl border border-gray-3 py-2 pl-8 pr-4 text-gray-2 outline-gray-3 focus:outline-gray-1 resize-none"
            placeholder="digite a descrição do produto" 
            v-model="item.description"></textarea>
        </div>
        <!--Price -->
        <div class="relative flex flex-col gap-1">
          <label for="price" class="ml-1 text-sm font-bold text-gray-1">
            Valor Produto:
          </label>
          <span
              size={18}
              class="absolute bottom-[9px] left-3 text-gray-3 "
          >R$:</span>
          <input
            type="number"
            step="any"
            min="0"
            name="price"
            id="price"
            class="rounded-full border border-gray-3 py-2 pl-10 pr-2 text-gray-2 outline-gray-3 focus:outline-gray-1"
            placeholder="digite o preço do produto"
            v-model="item.price"
          />
        </div>
        <div class="w-full flex items-center gap-3">
          <Button v-if="loading === false" :handleClick="handleSendData" :title="'criar'" :function-type="'create'"/>
          <Button v-if="loading === true" :handleClick="handleSendData" :functionType="'loading'" :title="'loading'"/>
        </div>
      </form>
    </main>
  </div>
</template>