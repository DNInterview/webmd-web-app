<template>
  <div class="employee-view">
    <h1>Employees</h1>
    <button
      class="employee-view__create-button"
      @click="showCreateFormModal = true"
    >
      Show Modal
    </button>
    <modal-entity-form
      v-if="showCreateFormModal"
      @close="showCreateFormModal = false"
    >
    </modal-entity-form>

    <table class="employee-view__entity-list">
      <thead class="employee-view__list-header">
        <tr>
          <th v-for="col in entityColumns" v-bind:key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody class="employee-view__list-body">
        <tr v-for="(row, key) in entityList" v-bind:key="key">
          <td v-for="(col, key) in entityColumns" v-bind:key="key">
            {{ row[col] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

Vue.component("modal-entity-form", {
  template: "#modal-entity-form"
});
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
