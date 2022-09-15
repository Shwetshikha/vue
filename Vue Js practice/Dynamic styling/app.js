//  <!--LECTURE 33 DYNAMIC STYLING WITH INLINE STYLES-->//

// const app = Vue.createApp({
//   data() {
//     // DATA OBJECT//
//     return {
//       boxASelected: false,
//       boxBSelected: false, //
//       boxCselected: false,
//     };
//   },
//   methods: {
//     boxSelected(box) {
//       if (box === "A") {
//         this.boxASelected = true;
//       } else if (box === "B") {
//         this.boxBSelected = true;
//       } else if (box === "C") {
//         this.boxCSelected = true;
//       }
//     },
//   },
// });

// app.mount("#styling");
//LECTURE-34 Adding CSS Classes Dynamically//
// const app = Vue.createApp({
//   data() {
//     // DATA OBJECT//
//     return {
//       boxASelected: false,
//       boxBSelected: false, //
//       boxCselected: false,
//     };
//   },
//   methods: {
//     boxSelected(box) {
//       if (box === "A") {
//         this.boxASelected = !this.boxASelected;
//       } else if (box === "B") {
//         this.boxBSelected = !this.boxBSelected;
//       } else if (box === "C") {
//         this.boxCSelected = !this.boxCSelected;
//       }
//     },
//   },
// });

// app.mount("#styling");

//LECTURE 35 & lec 36 included CLASSES AND COMPUTED PROPERTIES//
const app = Vue.createApp({
  data() {
    // DATA OBJECT//
    return {
      boxASelected: false,
      boxBSelected: false, //
      boxCselected: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
    boxBClasses() {
      return { active: this.boxBSelected };
    },
    boxCClasses() {
      return { active: this.boxCSelected };
    },
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount("#styling");

//<!--LECTURE 36 ARRAY SYNTAX-->
// we can use [] to pass multiple arrays as string //

// LECTURE 37 MODULE SUMMARY //

//Interaction with DOM and Templates Vue can be used to define the goal instead of the steps it follows delerative approach//
// Mount is used to connect vue then render the real DOM based on the connected template//
// Data and Event Binding -- we can bind data via interpolation ({{}}) or v-bind (":") directives
//shorthand notations like : and @ for listening to the event//
// REACTIVITY -- Vue updates the real DOM for you when bound data changes//
// Computed properties and watchers allow you to react to data changes//
// STYLING- Inline and Dynamic styling css is supported by Vue.
// Vue also offers multiple special syntaxes i.e object based, array-based, for efficient bindings//
