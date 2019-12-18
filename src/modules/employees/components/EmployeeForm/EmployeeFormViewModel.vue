<template>
  <div>
    <button
      class="entity-view__create-button"
      @click="showForm"
      v-if="!showFormModal"
    >
      Create
    </button>

    <div class="modal-entity-form" v-if="showFormModal" @close="closeForm">
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
import { Prop, Vue } from "vue-property-decorator";
import IDatabaseEntity from "@/modules/core/models/interfaces/IDatabaseEntity";
import IEntityOptions from "@/modules/crud/options/IEntityOptions";
import IEmployeeFormViewModel from "@/modules/employees/components/EmployeeForm/IEmployeeFormViewModel";
import Component from "vue-class-component";

@Component({})
export default class EmployeeFormViewModel<T extends IDatabaseEntity>
  extends Vue
  implements IEmployeeFormViewModel<T> {
  @Prop() formModel?: IEntityOptions<T>;
  @Prop() showFormModal = false;

  closeForm() {
    this.showFormModal = false;
  }
  showForm() {
    debugger;
    this.showFormModal = true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-entity-form__field-input {
  align-self: inherit;
}
</style>
