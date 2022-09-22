<template>
  <div class="home">
    <div class="mx-auto max-w-screen-lg">
      <div class="flex items-center flex-col justify-center">
        <div class="btn" @click="$store.commit('GetRandomQuote')">
          Get Random quote
        </div>
        <p class="mb-6 my-10 text-2xl text-center text-gray" v-if="typeof $store.state.quote._id != 'undefined'">
          <span>
            "{{ $store.state.quote.content }}"
          </span>
          <span>
            -{{ $store.state.quote.author}}
          </span>
        </p>
      </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>
