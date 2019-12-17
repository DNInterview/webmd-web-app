<template>
  <div class="employee-view">
    <h1>Employees</h1>
    <table class="employee-view__entity-list">
      <thead class="employee-view__list-header">
        <tr>
          <th v-for="col in columns" v-bind:key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody class="employee-view__list-body">
        <tr v-for="(row, key) in list" v-bind:key="key">
          <td v-for="(col, key) in columns" v-bind:key="key">{{ row[col] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import CrudView from "@/modules/crud/components/CrudView";
import EmployeeStoreState from "@/modules/employees/store/EmployeeStoreState";

@Component
export default class EmployeeView extends CrudView<
  IEmployeeEntity,
  EmployeeStoreState
> {
  public mounted() {
    super.mounted();
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
