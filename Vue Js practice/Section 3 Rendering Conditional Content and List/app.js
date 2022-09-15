//<!-- LECTURE 39 MODULE INTRODUCTION
// LECTURE 40 UNDERSTANDING THE PROBLEM

// const app = Vue.createApp({
//   data() {
//     return {
//       enteredGoalValue: "",
//       goals: [],
//     }; // empty the string to see effect//
//   },
// });

// app.mount("#user-goals");

// LECTURE 41 RENDERING CONTENT CONDITIONALLY-->

// const app = Vue.createApp({
//   data() {
//     return {
//       enteredGoalValue: "",
//       goals: [],
//     }; // empty the string to see effect//
//   },
//   methods: {
//     addGoal() {
//       this.goals.push(this.enteredGoalValue);
//     },
//   },
// });

// app.mount("#user-goals");

//LECTURE 42 V-IF, V-ELSE AND V-ELSE-IF
// const app = Vue.createApp({
//   data() {
//     return {
//       enteredGoalValue: "",
//       goals: [],
//     }; // empty the string to see effect//
//   },
//   methods: {
//     addGoal() {
//       this.goals.push(this.enteredGoalValue);
//     },
//   },
// });

// app.mount("#user-goals");
// if (true) {
// }

// LECTURE- 43 Using v-Show Instead Of v-if//
// const app = Vue.createApp({
//   data() {
//     return {
//       enteredGoalValue: "",
//       goals: [],
//     }; // empty the string to see effect//
//   },
//   methods: {
//     addGoal() {
//       this.goals.push(this.enteredGoalValue);
//     },
//   },
// });

// app.mount("#user-goals");
// if (true) {
// }
// v-show doesn't work together with v-else or v-else-if. it Works stand alone//
//while reloading there would be no difference b/w v-show or v-else or v-else-if //
// The only diffrence is that the unordered list is hidden if we use v-show in this example as its display style is none.

// <!--LECTURE-44 RENDERING LISTS OF DATA -->
//v-for can be used with objects as well
// //
// const app = Vue.createApp({
//   data() {
//     return {
//       enteredGoalValue: "",
//       goals: [],
//     }; // empty the string to see effect//
//   },
//   methods: {
//     addGoal() {
//       this.goals.push(this.enteredGoalValue);
//     },
//   },
// });

// app.mount("#user-goals");

//    <!-- LECTURE 46 REMOVING LIST ITEMS-->
// const app = Vue.createApp({
//   data() {
//     return {
//       enteredGoalValue: "",
//       goals: [],
//     };
//   },
//   methods: {
//     addGoal() {
//       this.goals.push(this.enteredGoalValue);
//     },
//     removeGoal(index) {
//       this.goals.splice(index, 1);
//     },
//   },
// });

// app.mount("#user-goals");

//<!--LECTURE 47 LISTS AND KEYS-->
// 
const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
// LECTURE 48 MODULE SUMMARY//
//Conditional Content- v-if and v-show allows you to render the content only if a certain condition is met//
//v-if can be combined with v-else and v-else-if (only on direct sibling elements)
//Lists- v-for can be used to render multiple element dynamically
// v-variations you can extract values, values and index, key and indexes//
