<template>
  <div class="star-rating-wrapper">
    <component
      :is="getProperRatingComponent"
      :totalRating="totalRating"
      :rating="getRating"
      :votes="votes"
      @set-rating="rate"
    >
      Rate This Card
    </component>
  </div>
</template>

<script>
import StarRatingResultMixin from '@/mixins/star-rating-result';
import StarRatingResult from './StarRatingResult.vue';
import StarRatingSelect from './StarRatingSelect.vue';

export default {
  name: 'StarRating',

  components: {
    StarRatingResult,
    StarRatingSelect,
  },

  mixins: [StarRatingResultMixin],

  provide: {
    starRating: true,
  },

  data: () => ({
    currentRating: 0,
    voted: false,
  }),

  computed: {
    getRating() {
      return this.rating || this.currentRating;
    },

    getProperRatingComponent() {
      if (this.voted) {
        return StarRatingResult;
      }

      return StarRatingSelect;
    },
  },

  methods: {
    rate(rating) {
      this.currentRating = rating;
      this.voted = rating;
    },
  },
};
</script>

<style lang="scss" scoped>
.star-rating-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
}
</style>
