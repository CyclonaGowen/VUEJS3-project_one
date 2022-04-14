const app = Vue.createApp({
    data() {
        return {
            state: true,
            inputName: '',
            names: [],
            error: '',
            showError: false,
            result: ''
        }
    },
    computed: {
        isReady(){
            return this.names.length > 1;
        }
    },
        methods: {
            addNameToList(){
                const userName = this.inputName;
                if(this.validate(userName)) {
                    this.names.push(userName);
                    this.inputName = '';
                    this.showError = false;
                    // console.log(this.names)
                } else {
                    this.showError = true;
                }
            },
            validate(value) {

                this.error = '';
                if(value === '') {
                    this.error = 'Name is required';
                    return false;
            }

            if(this.names.includes(value)) {
                this.error = 'Name already exists';
                return false;
            }
            return true
        },
        removeName(index) {
            this.names.splice(index, 1);
        },
        getRandomName() {
            return this.names[Math.floor(Math.random() * this.names.length)];
        },
        generateResult() {
            let rand = this.getRandomName();
            if(this.result !== '') {
                while(rand === this.result) {
                    rand = this.getRandomName();
                }
            }
            this.result = rand;
        },

        showResults() {
            this.generateResult();
            this.state = false;
        },
        resetApp(){
            this.state = true,
            this.inputName ='',
            this.names = [],
            this. error = '',
            this.showError = false,
            this.result = ''
        },
        getNewResult() {
            this.generateResult();
        }
    }
}).mount('#app');