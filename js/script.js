const { createApp } = Vue


createApp({
    data() {
        return {
            
            // MI salvo array vuoto per emails
            emails: [],
            
        }
    },
    
    // al caricamento della pagina:
    mounted() {
        // Effettuo 10 richieste GET all'API per ottenere email casuali
        for (let i = 0; i < 10; i++) {

            // Predo API emails
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((output) => {

                this.emails.push(output.data.response);

                console.log(this.emails);
            });

        }

    }
}).mount('#app');