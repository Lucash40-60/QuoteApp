import { createStore } from 'vuex'

export default createStore({
  state: {
    quote: {}, // la quote display
    quotes: [] // l'array qui stock les quotes
  },
  mutations: {
    GetRandomQuote (state) {
      fetch('http://localhost:3000/quotes/random')
      .then(res => res.json())
      .then(data => {
          if(state.quote._id != data._id){
            state.quote = data.content; 
          }else{
            // console.log("Duplicate"); 
             this.commit('GetRandomQuote'); 
          }
      }); 
    }, 
    GetAllQuotes (state) {
      fetch("http://localhost:3000/quotes")
      .then(res => res.json())
      .then(data => {
        // console.log("Duplicate"); 
        state.quotes = data; 
      }); 
    }
  },
})
