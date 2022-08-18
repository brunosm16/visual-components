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
import StarRatingResultMixin from '@/mixins/star-rating-result';
import StarRatingInjectionValidation from '@/mixins/star-rating-injection-validation';
import getMaterialIconName from '@/utils/get-material-icon-name';
import '../../assets/styles/star-rating.scss';

export default {
  name: 'StarRatingResult',

  mixins: [StarRatingResultMixin, StarRatingInjectionValidation],

  methods: {
    getStarIcon(rate) {
      return getMaterialIconName(rate, this.rating);
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
