<template>
  <div class="star-rating-input">
    <div class="star-rating-input__message" v-if="$slots.default">
      <slot />
    </div>

    <ul class="star-rating-input__star-list">
      <li
        v-for="rate in totalRating"
        :key="rate"
        class="star-rating-input__star-list-item"
        @click="submitRating(rate)"
        @mouseenter="updateCurrentRating(rate)"
        @focus="updateCurrentRating(rate)"
        @keydown="() => {}"
      >
        <i class="material-icons">{{ getStarIcon(rate) }}</i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StarRatingInput',

  props: {
    totalRating: {
      type: Number,
      default: 5,
      validator: (v) => typeof v === 'number',
    },
  },

  data: () => ({ currentRating: 0 }),

  methods: {
    updateCurrentRating(rate) {
      this.currentRating = rate;
    },

    submitRating(rate) {
      this.updateCurrentRating(rate);

      this.$emit('set-rating', rate);
    },

    getStarIcon(rate) {
      if (rate <= this.currentRating) {
        return 'star';
      }

      if (Math.fround(rate - this.currentRating) < 1) {
        return 'star_half';
      }

      return 'star_border';
    },
  },
};
</script>

<style lang="scss" scoped>
.star-rating-input {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__message {
    font-size: 1.25rem;
  }

  &__star-list {
    display: inline-block;
    list-style: none;
    padding: 0;
    margin: 0;

    .material-icons {
      color: #f9f871;
    }

    & > li {
      float: left;
    }
  }
}
</style>
