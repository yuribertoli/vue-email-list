const app = new Vue ({

    el: "#root",

    data: {
        emails: [],
        show: false
    },

    methods: {

    },

    mounted() {

        for (let i=0; i<10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((risposta) => {

                this.emails.push(risposta.data.response);
            });
        }

        console.log(this.emails);

        setTimeout(() => {
            if (this.emails.length == 10) {
                this.show = true;
            };
        }, 1000)
        
    }
});

