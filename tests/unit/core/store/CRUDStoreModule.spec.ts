import {
  CRUD_ACTION_GET_LIST,
  CRUD_MUTATION_STORE_LIST
} from "@/modules/crud/stores/CRUDStoreModule.constants";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import EmployeeStoreModule from "@/modules/employees/store/EmployeeStoreModule";
import EmployeeService from "@/modules/employees/services/EmployeeService/EmployeeService";
import CRUDStoreModule from "@/modules/crud/stores/CRUDStoreModule";
import { Store } from "vuex";
import Employee from "@/modules/employees/models/Employee/Employee";
import Vue from "vue";
import Vuex from "vuex";

describe("CRUDStoreModule", () => {
  let crudStoreModule: CRUDStoreModule<IDatabaseEntity>;
  let vuexStore: Store<any>;
  let mockService: EmployeeService;
  beforeAll(() => {});
  describe("actions", () => {
    describe(CRUD_ACTION_GET_LIST, () => {
      it(`get entity list and commits changes to ${CRUD_MUTATION_STORE_LIST}`, async () => {});
      //
      mockService = {} as EmployeeService;
      crudStoreModule = new EmployeeStoreModule(mockService);
      Vue.use(Vuex);
      vuexStore = new Store({
        actions: crudStoreModule.getActions(),
        mutations: crudStoreModule.mutations
      });
      vuexStore.commit = jest.fn();

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
      vuexStore.dispatch(CRUD_ACTION_GET_LIST);

      // Assert
      expect(mockService.list).toHaveBeenCalled();
      expect(vuexStore.commit).toHaveBeenCalledWith(
        CRUD_MUTATION_STORE_LIST,
        expectedEmployeeList
      );
    });
  });
});
