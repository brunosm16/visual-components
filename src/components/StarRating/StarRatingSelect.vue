<template>
  <div class="star-rating">
    <div class="star-rating__message">
      <slot v-if="$slots.default" />
      <span v-else>Rate This</span>
    </div>

    <ul class="star-rating__star-list">
      <li
        v-for="rate in totalRating"
        :key="rate"
        class="star-rating__star-list-item"
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
import StarRatingInjectionValidation from '@/mixins/star-rating-injection-validation';
import getMaterialIconName from '@/utils/get-material-icon-name';
import '../../assets/styles/star-rating.scss';

export default {
  name: 'StarRatingInput',

  mixins: [StarRatingInjectionValidation],

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
      return getMaterialIconName(rate, this.currentRating);
    },
  },
};
</script>

<style lang="scss" scoped>
.star-rating {
  &__message {
    font-size: 1.25rem;
  }
}
</style>
