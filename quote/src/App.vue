<template>
  <div class="p-3">
    <div class="mx-auto max-w-screen-lg flex item-center justify-center">
      <router-link to="/" class="mx-2 btn">
        Home
      </router-link> |
      <router-link to="/all" class="mx-2 btn">
        All quotes
      </router-link>|
      <router-link to="/create" class="mx-2 btn">
        Create a quote
      </router-link>
    </div>
  </div>
  <router-view/>
</template>

<script setup>
  import {useStore} from 'vuex'; 
  import { onMounted, ref } from 'vue';
  import axios from 'axios'

  const store = useStore(); 
  let data = ref()

  onMounted(() => {
      store.commit('GetAllQuotes'); 

      axios.get('http://localhost:3000/quotes').then((res) => {
      data.value = res.data
      console.log(data.value);
      })
  })

</script>