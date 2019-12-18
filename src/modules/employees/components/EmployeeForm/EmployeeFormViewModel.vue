<template>
  <div>
    <button
      class="entity-view__create-button"
      @click="showForm"
      v-if="!shouldShowForm"
    >
      Create
    </button>

    <div class="modal-entity-form" v-if="shouldShowForm" @close="closeForm">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div
                class="modal-entity-form__field-input"
                v-for="field in formModel.fields"
                :key="field"
              >
                <label>{{ field }}</label>
                <input :placeholder="field" />
              </div>
              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button" @click="closeForm">
                    Create
                  </button>
                  <button class="modal-default-button" @click="closeForm">
                    Cancel
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import IEmployeeEntity from "@/modules/employees/models/Employee/IEmployeeEntity";
import CrudFormViewModel from "@/modules/crud/view-models/form/CrudFormViewModel";

@Component({})
export default class EmployeeFormViewModel extends CrudFormViewModel<
  IEmployeeEntity
> {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-entity-form__field-input {
  align-self: inherit;
}
</style>
