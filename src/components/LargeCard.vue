<template>
  <div class="card">
    <div class="card__media">
      <slot v-if="$slots.media" name="media" />
      <img v-else src="https://via.placeholder.com/350x250" alt="media" class="card__media-img" />
    </div>

    <div class="card__header">
      <slot v-if="$slots.header" name="header" class="card__header-slot" />

      <div v-else>
        <h2 class="card__header-title card__text">Card Title</h2>
        <h3 class="card__header-subtitle card__text">Card Subtitle</h3>
      </div>
    </div>

    <div
      v-if="$slots.default"
      class="card__section card__text"
      :class="{ 'no-bottom-padding': $slots.action, 'half-padding-top': $slots.media }"
    >
      <slot />
    </div>

    <div v-if="$slots.actions" class="card__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LargeCard',
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
@import '../assets/styles/custom-card.scss';
@import '../assets/styles/colors.scss';

* {
  font-family: 'Roboto', sans-serif;
}

.card {
  width: 100%;
  max-width: 541px;
  padding: 1.5rem 1.75rem;
  border-radius: 0.875rem;
  background: $bg-dark;
  color: $white-1;
  display: inline-block;
  position: relative;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.14),
    0 8px 4px -2px rgba(0, 0, 0, 0.12);

  .no-bottom-padding {
    padding-bottom: 0 !important;
  }

  .half-padding-top {
    // padding-top: 0.625rem !important;
  }

  &__media {
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;

    &-img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  &__header {
    display: block;
    position: relative;
    padding: 0.75rem;
    margin: 0.875rem;
    text-align: center;

    &-subtitle {
      color: $purple-1;
      text-align: center;
    }
  }

  &__section {
    display: block;
    position: relative;
    text-align: center;
  }
}
</style>
