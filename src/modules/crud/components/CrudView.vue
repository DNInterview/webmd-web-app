<template>
  <div class="crud-view">
    <table class="crud-view__entity-list">
      <thead>
        <tr>
          <!--          <th v-for="col in columns">{{ col }}</th>-->
        </tr>
      </thead>
      <!--      <tbody v-if="{{list}}">-->
      <!--                <tr v-for="row in {{ list! }}">-->
      <!--                  <td v-for="col in columns">{{ row[col] }}</td>-->
      <!--                </tr>-->
      <!--      </tbody>-->
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import ICrudView from "@/modules/crud/components/ICrudView";

@Component
export default class CrudView<T extends IDatabaseEntity> extends Vue
  implements ICrudView<T> {
  list?: T[];
  public get columns(): string[] {
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
