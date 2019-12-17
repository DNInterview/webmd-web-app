<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <input
            v-for="key in formModal.fields"
            v-bind:key="key"
            placeholder="{{key}}"
            class="modal-entity-form__form-input"
          />
          <slot name="header">
            default header
          </slot>
          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                Create
              </button>
              <button class="modal-default-button" @click="$emit('close')">
                Cancel
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" id="modal-entity-form">
import { Component } from "vue-property-decorator";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import CrudViewModel from "@/modules/crud/components/CrudViewModel";
import EmployeeStoreState from "@/modules/employees/store/EmployeeStoreState";

@Component
export default class EmployeeView extends CrudViewModel<
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
