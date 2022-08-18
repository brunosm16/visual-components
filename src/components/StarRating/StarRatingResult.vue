<template>
  <div class="star-rating">
    <ul class="star-rating__list">
      <li v-for="rate in totalRating" :key="rate">
        <i class="material-icons">{{ getStarIcon(rate) }}</i>
      </li>
    </ul>

    <div class="star-rating__text">
      <span class="star-rating__text--rating">
        {{ rating }}
      </span>

      <span v-if="votes" class="star-rating__text--votes"> | Votes: ({{ votes }}) </span>
    </div>
  </div>
</template>

<script>
import '../../assets/styles/star-rating.scss';

export default {
  name: 'StarRatingResult',

  inject: {
    starRating: {
      default() {
        console.error('StarRatingResult needs to be a child of StarRating');
      },
    },
  },

  props: {
    totalRating: {
      type: Number,
      default: 5,
      validator: (v) => typeof v === 'number',
    },

    rating: {
      type: Number,
      default: 0,
      validator: (v) => typeof v === 'number',
    },

    votes: {
      type: Number,
      default: 0,
      validator: (v) => typeof v === 'number',
    },
  },

  methods: {
    getStarIcon(rate) {
      if (rate <= this.rating) {
        return 'star';
      }

      if (Math.fround(rate - this.rating) < 1) {
        return 'star_half';
      }

      return 'star_border';
    },
  },
};
</script>

<style lang="scss" scoped>
.star-rating {
  margin-top: 1.25rem;
  justify-content: space-around;

  &__list {
    margin-right: 1.25rem;
  }

  &__text {
    display: flex;
    gap: 8px;
    font-weight: bold;
    font-size: 1.5rem;

    &--rating {
      color: #f9f871;
    }
  }
}
</style>
