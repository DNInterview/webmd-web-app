<template>
  <div class="employee-view">
    <table v-if="list" class="crud-view__entity-list">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in list" :key="row">
          <td v-for="col in columns" :key="col">{{ row[col] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IEmployeeView from "@/modules/employees/components/IEmployeeView";
import { CRUD_ACTION_GET_LIST } from "@/modules/crud/stores/CRUDStoreModule.constants";
import IEmployee from "@/modules/employees/models/Employee/IEmployee";

@Component
export default class EmployeeView extends Vue implements IEmployeeView {
  mounted() {
    debugger;
    this.$store.dispatch(CRUD_ACTION_GET_LIST);
  }
  list: IEmployee[] = [];
  public get columns(): string[] {
    if (this.list) {
      return this.list!.length ? this.list![0].fields : [];
    }
    return [];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
