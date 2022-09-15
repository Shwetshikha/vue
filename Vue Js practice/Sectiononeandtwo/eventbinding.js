// EVENT BINDING, USING 'THIS'//

// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 0,
//     };
//   },
//   //This one is for adding one or reducing one
//   methods: {
//     add() {
//       this.counter = this.counter + 1;
//     },
//     reduce() {
//       this.counter = this.counter - 1;
//     },
//   },
// });
// app.mount("#events");

// WORKING WITH THE ARGUMENTS //
// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 0,
//     };
//   },

//   methods: {
//     add(num) {
//       this.counter = this.counter + num;
//     },
//     reduce(num) {
//       this.counter = this.counter - num;
//     },
//   },
// });
// app.mount("#events");

// USING NATIVE EVENT OBJECTS - LECTURE 24//

// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 0,
//       name: "",
//     };
//   },
//   methods: {
//     setName(event) {
//       this.name = event.target.value;
//     },
//     add(num) {
//       this.counter = this.counter + num;
//     },
//     reduce(num) {
//       this.counter = this.counter - num;
//     },
//   },
// });
// app.mount("#events");

//USING SECOND NAME//

// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 0,
//       name: "",
//     };
//   },
//   methods: {
//     setName(event, lastName) {
//       this.name = event.target.value + "" + lastName;
//     },
//     add(num) {
//       this.counter = this.counter + num;
//     },
//     reduce(num) {
//       this.counter = this.counter - num;
//     },
//   },
// });
// app.mount("#events");

// EXPLORING EVENT MODIFIERS LECTURE 25//
// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 0,
//       name: "",
//       confirmedName: "",
//     };
//   },
//   methods: {
//     confirmInput() {
//       this.confirmedName = this.name;
//     },
//     submitForm() {
//       //   event.preventDefault();
//       alert("Submitted!");
//     },
//     setName(event, lastName) {
//       this.name = event.target.value + "" + lastName;
//     },
//     add(num) {
//       this.counter = this.counter + num;
//     },
//     reduce(num) {
//       this.counter = this.counter - num;
//     },
//   },
// });
// app.mount("#events");

// LECTURE 27 DATA BINDING AND EVENT BINDING TWO-WAY BINDING//

// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 0,
//       name: "",
//     };
//   },
//   methods: {
//     setName(event, lastName) {
//       this.name = event.target.value;
//     },
//     add(num) {
//       this.counter = this.counter + num;
//     },
//     reduce(num) {
//       this.counter = this.counter - num;
//     },
//     resetInput() {
//       this.name = "";
//     },
//   },
// });
// app.mount("#events");

//LECTURE 28 METHODS USED FOR DATA BINDING : HOW IT WORKS//

// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 0,
//       name: "",
//     };
//   },
//   methods: {
//     outputFullname() {
//       if (this.name === "") {
//         return "";
//       }
//       return this.name + "" + "Shikha";
//     },
//     setName(event, lastName) {
//       this.name = event.target.value;
//     },
//     add(num) {
//       this.counter = this.counter + num;
//     },
//     reduce(num) {
//       this.counter = this.counter - num;
//     },
//     resetInput() {
//       this.name = "";
//     },
//   },
// });
// app.mount("#events");

//LECTURE 29 INTRODUCING COMPUTED PROPERTIES//
// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 0,
//       name: "",
//     };
//   },
//   computed: {
//     fullName() {
//       console.log("Running again...");
//       if (this.name === "") {
//         return "";
//       }
//       return this.name + "" + "Shikha";
//     },
//   },
//   methods: {
//     outputFullname() {
//       if (this.name === "") {
//         return "";
//       }
//       return this.name + "" + "Shikha";
//     },
//     setName(event, lastName) {
//       this.name = event.target.value;
//     },
//     add(num) {
//       this.counter = this.counter + num;
//     },
//     reduce(num) {
//       this.counter = this.counter - num;
//     },
//     resetInput() {
//       this.name = "";
//     },
//   },
// });
// app.mount("#events");

//LECTURE 30 WATCHERS-//
// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 0,
//       name: "",
//       fullName: "",
//       lastName: "",
//     };
//   },
//   watch: {
//     counter(value) {
//       if(value > 50) {
//         this.counter = 0;
//       }
//     },
//   name(value) {
//     if (value === "") {
//       this.fullName = "";
//     } else {
//       this.fullName = this.name + "" + "Shikha";
//     }
//   },
//   lastName(value) {
//     if (value === "") {
//       this.fullName = "";
//     } else {
//       this.fullName = this.name + "" + value;
//     }
//   },
// },
//   computed: {
//     fullName() {
//       console.log("Running again...");
//       if (this.name === "" || this.lastName === "") {
//         return "";
//       }
//       return this.name + "" + this.lastName;
//     },
//   },
//   methods: {
//     outputFullname() {
//       if (this.name === "") {
//         return "";
//       }
//       return this.name + "" + "Shikha";
//     },
//     setName(event, lastName) {
//       this.name = event.target.value;
//     },
//     add(num) {
//       this.counter = this.counter + num;
//     },
//     reduce(num) {
//       this.counter = this.counter - num;
//     },
//     resetInput() {
//       this.name = "";
//     },
//   },
// });
// app.mount("#events");

// LECTURE 31 Methods vs Computed vs Watch//
// Method: used with both data and event binding, method is executed for every re-render cycle of the component
// Computed: used with data binding, computed are re-evaluated if one of their used value changed, used for dats that depends on other data.
// Watch: Not used directly in the template. Allow to run any code in reaction to some changed data ex- send Http request use for any non-data update you want to make.

// LECTURE 32- V-BIND AND V-ON SHORTHAND//
// USE ':value' in place of 'v-bind:value'
//USE '@click' in place of 'v-on: click'
