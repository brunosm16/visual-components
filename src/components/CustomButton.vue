<template>
  <div class="button">
    <button
      tabindex="0"
      class="button"
      @click="$emit('action')"
      :style="{ background: backgroundColor, color: textColor }"
      :class="{ round: $props.isRound, isFlat: $props.isFlat }"
      v-bind="$attrs"
    >
      <div class="button__focus-helper" />
      <slot />
    </button>
  </div>
</template>

<script>
import isColor from 'is-color';

export default {
  name: 'CustomButton',

  props: {
    backgroundColor: {
      type: String,
      default: '#8a7ad2',
      validator: (v) => typeof v === 'string' && isColor(v),
    },

    textColor: {
      type: String,
      default: '#FFFFFF',
      validator: (v) => typeof v === 'string' && isColor(v),
    },

    isFlat: {
      type: Boolean,
      default: false,
      validator: (v) => typeof v === 'boolean',
    },

    isRound: {
      type: Boolean,
      default: false,
      validator: (v) => typeof v === 'boolean',
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
@import '../assets/styles/colors.scss';

.button {
  user-select: none;
  position: relative;
  outline: 0;
  border: 0;
  border-radius: 0.25rem;
  vertical-align: middle;
  background: inherit;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.25rem;
  text-decoration: none;
  text-transform: capitalize;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  color: inherit;
  width: 200px;
  height: 44px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.00125rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  .round {
    border-radius: 1.25rem;
  }

  &:not(.is-flat) {
    box-shadow: 0 1px 5px rgba(255, 255, 255, 0.2), 0 2px 2px rgba(255, 255, 255, 0.14),
      0 3px 1px -2px rgba(255, 255, 255, 0.12);

    &:focus:before,
    &:active:before,
    &:hover:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14),
        0 1px 14px rgba(0, 0, 0, 0.12);
    }
  }

  &__focus-helper {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    pointer-events: none;
    outline: 0;
    opacity: 0;
    transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
      opacity 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);

    &:after,
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      border-radius: inherit;
      transition: background-color 0.3s cubic-bezier(0.25, 0.8, 0.5, 1),
        opacity 0.6s cubic-bezier(0.25, 0.8, 0.5, 1);
    }

    &:before {
      background: #000;
    }

    &:after {
      background: #fff;
    }
  }
}

.button:focus .button__focus-helper:before,
.button:hover .button__focus-helper:before {
  opacity: 0.1;
}

.button:focus .button__focus-helper:after,
.button:hover .button__focus-helper:after {
  opacity: 0.6;
}

.button:focus .button__focus-helper,
.button:hover .button__focus-helper {
  opacity: 0.2;
}
</style>
