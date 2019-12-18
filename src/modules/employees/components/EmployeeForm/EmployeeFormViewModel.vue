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
                <input :placeholder="field" v-model="formModel[field]" />
              </div>
              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button" @click="submitForm">
                    {{ typeDescription }}
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
import {
  CRUD_ACTION_CREATE_ENTITY,
  CRUD_ACTION_UPDATE_ENTITY
} from "@/modules/crud/stores/CrudStoreModule.constants";
import { EmployeeFormViewModelType } from "@/modules/employees/components/EmployeeForm/EmployeeFormViewModelType";

@Component({})
export default class EmployeeFormViewModel extends CrudFormViewModel<
  IEmployeeEntity
> {
  get type(): EmployeeFormViewModelType {
    return this.$store.state.formType;
  }

  get typeDescription(): string {
    return this.type === EmployeeFormViewModelType.Create ? "Create" : "Update";
  }

  closeForm(): void {
    this.$store.state.shouldShowForm = false;
  }

  showForm(): void {
    this.$store.state.shouldShowForm = true;
  }

  submitForm(): void {
    let action = "";
    switch (this.$store.state.formType) {
      case EmployeeFormViewModelType.Create:
        action = CRUD_ACTION_CREATE_ENTITY;
        break;
      case EmployeeFormViewModelType.Update:
        action = CRUD_ACTION_UPDATE_ENTITY;
        break;
    }
    this.$store.dispatch(action, this.formModel);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-entity-form__field-input {
  align-self: inherit;
}
</style>
