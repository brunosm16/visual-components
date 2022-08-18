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
import StarRatingResult from './StarRatingResult.vue';
import StarRatingSelect from './StarRatingSelect.vue';

export default {
  name: 'StarRating',

  components: {
    StarRatingResult,
    StarRatingSelect,
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
