// const app = Vue.createApp({
//     data(){
//         return {
//             courseGoal: 'Finish the course and learn Vue!'
//         };
//     }
// });

// app.mount('#user-goal');


const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Finish the Udemy Lecture by 17 September',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            // if (randomNumber < 0.5) {
            //     return 'Learn Vue!';
            // } else {
            //     return 'Master Vue!';
            // }
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            }   else {
                return this.courseGoalB;
            }

            }
        }
    },
);

app.mount('#user-goal');

// const app1 = Vue.createApp({
//     data() {
//         return {
//             description1: 'Learn DOM Interaction',
//             description2: 'Learn the Feature Interpolation',


//         };
//     }
// });
// app.mount('#user-goal');