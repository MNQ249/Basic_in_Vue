const app = Vue.createApp({

data(){
	return{
		courseGoalA: 'Finsh this course and learn Vue',
		courseGoalB: 'Master of Vue',
		VueLink: 'https://vuejs.org/'
	};
},
methods:{
	outputGoal(){
		const randomNumber = Math.random(); //random between 0 & 1
		if (randomNumber < 0.5){
			return this.courseGoalA;
		}
		else{
			return this.courseGoalB;
		}
	}
}
});
app.mount('#user-goal');