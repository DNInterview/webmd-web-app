<template>
  <div class="entity-view">
    <h1>Employees</h1>
    <entity-form />
    <entity-list />
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import EmployeeStoreState from "@/modules/employees/store/EmployeeStoreState";
import EntityList from "@/modules/employees/components/EmployeeListViewModel/EmployeeListViewModel.vue";
import EntityForm from "@/modules/employees/components/EmployeeForm/EmployeeFormViewModel.vue";
import CrudViewModel from "@/modules/crud/view-models/CrudViewModel";
import { Store } from "vuex";

@Component({
  components: {
    EntityList,
    EntityForm
  }
})
export default class EmployeeViewModel extends CrudViewModel<IEmployeeEntity> {
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
