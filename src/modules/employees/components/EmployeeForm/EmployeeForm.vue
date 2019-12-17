<template>
  <ModalEntityForm>
    <div class="modal-entity-form">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div
                class="modal-entity-form__field-input"
                v-for="field in formModal.fields"
                :key="field"
              >
                <label>{{ field }}</label>
                <input v-model="formModel" />
              </div>
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
    </div>
  </ModalEntityForm>
</template>

<script lang="ts">
export default class EmployeeForm {}
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
