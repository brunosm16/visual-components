<template>
  <div class="star-rating-wrapper">
    <StarRatingSelect v-if="showRatingSelect" :totalRating="totalRating" @set-rating="rate" />
    <StarRatingResult v-else :totalRating="totalRating" :rating="getRating" :votes="votes" />
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
    showRatingSelect() {
      return !this.voted;
    },

    getRating() {
      return this.rating || this.currentRating;
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
