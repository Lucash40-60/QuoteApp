<template>
    <div class="p-3">
        <div class="mx-auto max-w-screen-lg text-center text-xl bold">
            <h1>
                All Quotes
            </h1>

            <div class="flex flex-row justify-center align-middle" v-for="datas in data" v-bind:key="datas">
                <p class="mb-6 my-5 text-lg text-center">
                    <span class="italic text-xl text-gray-600">
                    "{{ datas.author }}"
                    </span>
                    <span>
                    - {{ datas.content }}
                    </span>
                </p>   
            </div>
        </div>
    </div>
</template>
  
<script setup>
    import { onMounted, ref } from 'vue';
    import axios from 'axios'
    let data = ref()

    onMounted(() => {
        axios.get('http://localhost:3000/quotes').then((res) => {
        data.value = res.data
        console.log(data.value);
        })
    })
  
  </script>