<template>
  <div class="employee-view">
    <table class="employee-view__entity-list">
      <thead class="employee-view__list-header">
        <tr>
          <th v-for="col in entityColumns" v-bind:key="col">{{ col }}</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody class="employee-view__list-body">
        <tr v-for="(row, key) in entityList" v-bind:key="key">
          <td v-for="(col, key) in entityColumns" v-bind:key="key">
            {{ row[col] }}
          </td>
          <td><button>+</button></td>
          <td>
            <button @click="deleteEntity(row)">
              x
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import CrudTableViewModel from "@/modules/crud/view-models/table-view/CrudTableViewModel";
import { Vue } from "vue-property-decorator";
import Vuex from "vuex";
import { CRUD_ACTION_DELETE_ENTITY } from "@/modules/crud/stores/CrudStoreModule.constants";

Vue.use(Vuex);

@Component({})
export default class EmployeeListViewModel extends CrudTableViewModel<
  IEmployeeEntity
> {
  deleteEntity(entity: IEmployeeEntity) {
    this.$store.dispatch(CRUD_ACTION_DELETE_ENTITY, entity);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: larger;
}
h3 {
  margin: 40px 0 0;
}
table {
  align-content: center;
  margin: 40px 10px 10px 40px;
}
td {
  border: 1px solid black;
}
</style>
