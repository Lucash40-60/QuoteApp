<template>
    <div>

    </div>
   
</template>
  
<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                id: null,
                author: null, 
                content: null 
            };
        },

        methods: {
            DeleteQuote() {
                axios.delete('http://localhost:3000/quotes/delete:id', {
                    id: this.id,
                    author: this.author, 
                    content: this.content
                }).then(function (reponse) {
                    //On traite la suite une fois la réponse obtenue 
                    console.log(reponse);
                })
                .catch(function (erreur) {
                    //On traite ici les erreurs éventuellement survenues
                    console.log(erreur);
                });

                this.$router.push('/all');
            }
        }
    }  
  </script>