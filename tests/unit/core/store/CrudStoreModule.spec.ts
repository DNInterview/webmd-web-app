import {
  CRUD_ACTION_CREATE_ENTITY,
  CRUD_ACTION_GET_LIST,
  CRUD_MUTATION_STORE_LIST
} from "@/modules/crud/stores/CrudStoreModule.constants";
import EmployeeStoreModule from "@/modules/employees/store/EmployeeStoreModule";
import EmployeeService from "@/modules/employees/services/EmployeeService/EmployeeService";
import CrudStoreModule from "@/modules/crud/stores/CrudStoreModule";
import { Store } from "vuex";
import Employee from "@/modules/employees/models/Employee/Employee";
import Vue from "vue";
import Vuex from "vuex";
import EmployeeStoreState from "@/modules/employees/store/EmployeeStoreState";
import CreateEmployeeOptions from "@/modules/employees/services/EmployeeService/CreateEmployeeOptions";

describe("CrudStoreModule", () => {
  let mockService: EmployeeService;
  let stubState: EmployeeStoreState;
  let crudStoreModule: EmployeeStoreModule;
  let vuexStore: Store<EmployeeStoreState>;
  beforeEach(() => {
    stubState = {} as EmployeeStoreState;
    mockService = {} as EmployeeService;
    crudStoreModule = new EmployeeStoreModule(mockService);
    Vue.use(Vuex);
    vuexStore = new Store({
      actions: crudStoreModule.actions,
      mutations: crudStoreModule.mutations
    });
  });
  describe("actions", () => {
    describe(CRUD_ACTION_GET_LIST, () => {
      it(`get entity list and commits changes to ${CRUD_MUTATION_STORE_LIST}`, async () => {
        //
        const expectedEmployeeList = [
          new Employee("some id 1"),
          new Employee("some id 2")
        ];
        mockService.list = jest
          .fn()
          .mockReturnValueOnce(
            new Promise(resolve => resolve(expectedEmployeeList))
          );

        // Act
        await vuexStore.dispatch(CRUD_ACTION_GET_LIST);

        // Assert
        expect(mockService.list).toHaveBeenCalled();
        expect(vuexStore.state.entityList).toEqual(expectedEmployeeList);
      });
    });
    describe(CRUD_ACTION_CREATE_ENTITY, () => {
      it(`get entity list and commits changes to ${CRUD_MUTATION_STORE_LIST}`, async () => {
        // Arrange
        const createOptions = new CreateEmployeeOptions();
        const expectedEmployee = new Employee("some id 1");
        mockService.create = jest
          .fn()
          .mockReturnValueOnce(
            new Promise(resolve => resolve(expectedEmployee))
          );

        // Act
        await vuexStore.dispatch(CRUD_ACTION_CREATE_ENTITY, createOptions);

        // Assert
        expect(mockService.create).toHaveBeenCalled();
      });
    });
  });
});
