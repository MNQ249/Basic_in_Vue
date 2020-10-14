const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },
  methods:{
    submitForm(){
      // event.preventDefault(); // prevent refreach page.
      alert('Submitted');
    },

    setName(event,lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    add(num){
      this.counter = this.counter + num;
      // this.counter ++;
    },
    remove(num){
      this.counter = this.counter - num;
      // this.counter --;
    }
  }
});

app.mount('#events');
