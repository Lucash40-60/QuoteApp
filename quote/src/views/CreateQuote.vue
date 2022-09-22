<template>
    <div class="p-3">
        <div class="mx-auto max-w-screen-lg">
            <h1>
                Create a quote 
            </h1>
        </div>
        <div>
            <form method="post" class="flex flex-col items-center">
                <!-- INPUT AUTEUR -->
                <div class="flex flex-row justify-center">
                    <label>
                        Author
                    </label>
                    <input type="text" class="border-solid border-black" 
                        v-model="author"
                        />
                </div>

                <!-- INPUT CONTENU -->
                <div class="flex flex-row justify-center">
                    <label>
                        Content
                    </label>
                    <input type="text" class="border-solid border-black" 
                        v-model="content"
                        />
                </div>

                <input type="submit" v-on:click="NewQuote()" value="Envoyer" class="mx-2 btn"/>
            </form>
        </div>
    </div>
</template>
  
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                author: null, 
                content: null 
            };
        },

        methods: {
            NewQuote() {
                axios.post('http://localhost:3000/quotes/new', {
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