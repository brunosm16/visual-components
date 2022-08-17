<template>
  <div class="button">
    <button class="button__element" @click="$emit('action')">
      <slot v-if="$slots.buttonMessage" name="button-message" />

      <span v-else class="button__element-message">Click Here</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'CustomButton',
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
@import '../assets/styles/colors.scss';

.button {
  &__element {
    background: $bg-light;
    color: $white-1;
    border: none;
    width: 200px;
    height: 44px;
    border-radius: 1.5rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.00125rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &-message {
      font-weight: bold;
      font-size: 1.125rem;
    }

    &:hover {
      background: $purple-2;
    }
  }
}
</style>
