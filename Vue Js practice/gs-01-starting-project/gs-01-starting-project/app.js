// const buttonEl = document.querySelector('button');   //to target the button element//
// const inputEl = document.querySelector('input');    // to target input//
// const listEL = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value;     // input value will have a value//
//     const listItemEl = document.createElement('li');  // create a new dom element//
//     listItemEl.textContent = enteredValue;
//     listEL.appendChild(listItemEl);
// }
// buttonEl.addEventListener('click', addGoal);        // adding a click listner//click will trigger the function addGoal//

// USING VUE JS//
Vue.createApp({
  data: function () {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
  },
}).mount("#app");
