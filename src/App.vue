<template>
  <div id="app">
    <LargeCard
      class="large-card"
      title="Large Card Title"
      subtitle="Large Card Subtitle"
      section-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      img-src="https://picsum.photos/300/200"
      display-media
      display-actions
    >
      <StarRating :votes="4" ref="starRating" />
      <template #actions>
        <div class="large-card__actions">
          <CustomButton @action="resetRating" backgroundColor="#8338ec" isFlat isRound
            >Reset Rating</CustomButton
          >
          <CustomButton @action="rateFiveStars">Rate with 5 stars</CustomButton>
        </div>
      </template>
    </LargeCard>
  </div>
</template>

<script>
import LargeCard from './components/LargeCard.vue';
import CustomButton from './components/CustomButton.vue';
import StarRating from './components/StarRating/StarRating.vue';

export default {
  name: 'App',

  components: {
    LargeCard,
    CustomButton,
    StarRating,
  },

  data: () => ({}),

  methods: {
    resetRating() {
      this.$refs.starRating.currentRating = 0;
      this.$refs.starRating.voted = false;
    },

    rateFiveStars() {
      this.$refs.starRating.currentRating = 5;
      this.$refs.starRating.voted = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.large-card {
  &__actions {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 1.625rem 0.25rem;

    *:not(:first-child) {
      margin-left: 3rem;
    }
  }
}
</style>
