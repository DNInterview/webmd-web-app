import Vue from "vue";
import Vuex from "vuex";
import EmployeeStoreModule from "@/modules/employees/store/EmployeeStoreModule";
import AWS from "aws-sdk";
import AWSService from "@/modules/core/services/cloud/AWSService/AWSService";
import EmployeeService from "@/modules/employees/services/EmployeeService/EmployeeService";
import EmployeeStoreState from "@/modules/employees/store/EmployeeStoreState";
import CreateEmployeeOptions from "@/modules/employees/services/EmployeeService/CreateEmployeeOptions";

Vue.use(Vuex);

const credentials = new AWS.Credentials({
  accessKeyId: process.env.VUE_APP_AWS_ACCESS_KEY_ID || "",
  secretAccessKey: process.env.VUE_APP_AWS_SECRET_ACCESS_KEY || ""
});
const awsService = new AWSService(credentials);
const employeeService = new EmployeeService(awsService.appSyncClient);
const employeeCreateFormModel = new CreateEmployeeOptions();
const employeeState = new EmployeeStoreState([], employeeCreateFormModel);
const employeeStore = new EmployeeStoreModule(employeeService);
export default new Vuex.Store({
  state: employeeState,
  mutations: employeeStore.mutations,
  actions: employeeStore.actions,
  modules: {}
});
