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
      <StarRatingInput> Rate This </StarRatingInput>
      <template #actions>
        <div class="large-card__actions">
          <CustomButton @action="doSomething" backgroundColor="#8338ec" isFlat isRound
            >Click Here</CustomButton
          >
          <CustomButton @action="doSomething">Click Here</CustomButton>
        </div>
      </template>
    </LargeCard>
  </div>
</template>

<script>
import LargeCard from './components/LargeCard.vue';
import CustomButton from './components/CustomButton.vue';
import StarRatingInput from './components/StarRating/StarRatingInput.vue';

export default {
  name: 'App',

  components: {
    LargeCard,
    CustomButton,
    StarRatingInput,
  },

  methods: {
    doSomething() {
      console.log('doSomething called');
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
