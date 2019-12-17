import Vue from "vue";
import App from "./App.vue";
import store from "./index";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

// const subquery = gql(newEmployee);
//
// const test = async () => {
//   const observable = await client.query({ query: gql(allEmployees) });
//   debugger;
//   console.log(observable, "observable");
//   observable.subscribe({
//     next: (data: any) => {
//       debugger;
//       console.log("realtime data: ", data);
//     },
//     complete: console.log,
//     error: console.error
//   });
//
//   const observable = client.subscribe({ query: subquery });
//   observable.subscribe({
//     next: (data: any) => {
//       debugger;
//       console.log("realtime data: ", data);
//     },
//     complete: console.log,
//     error: console.error
//   });
// };
//
// test();
