<template>
  <ModalEntityForm>
    <div class="modal-entity-form">
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
export default {
  props: ["formModel"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-entity-form__field-input {
  align-self: inherit;
}
</style>
