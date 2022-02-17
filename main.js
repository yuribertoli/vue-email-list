const app = new Vue ({

    el: "#root",

    data: {
        emails: [],
        numeroMail: 10,
        show: false
    },

    methods: {

    },

    created() {

        for (let i=0; i<this.numeroMail; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((risposta) => {

                this.emails.push(risposta.data.response);
            });
        }

        console.log(this.emails);
        
    },

    updated() {
        
        setTimeout(() => {
            if (this.emails.length == this.numeroMail) {
                this.show = true;
            };
        }, 0)
    }
});

