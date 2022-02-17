const app = new Vue ({

    el: "#root",

    data: {
        emails: [],
        show: false
    },

    methods: {

    },

    mounted() {

        let numeroMail = 10;

        for (let i=0; i<numeroMail; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((risposta) => {

                this.emails.push(risposta.data.response);
            });
        }

        console.log(this.emails);

        setTimeout(() => {
            if (this.emails.length == numeroMail) {
                this.show = true;
            };
        }, 1000)
        
    }
});

