<template>
  <div id="app">
    <LargeCard class="large-card">
      <template #media>
        <img src="https://via.placeholder.com/350x250" alt="media" class="large-card__media-img" />
      </template>

      <template #default>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu bibendum elit, non
          euismod mi. Vivamus congue dolor at mollis blandit. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Ut sit amet aliquet enim. Sed
          sagittis lacinia tortor sit amet mattis. Quisque commodo felis placerat est bibendum, nec
          cursus nunc pellentesque. Sed viverra varius hendrerit. Praesent porttitor rutrum
          bibendum. Maecenas varius consequat mauris, sit amet pharetra enim commodo in.
          Pellentesque ut congue tortor.
        </p>
      </template>

      <template #actions>
        <div class="large-card__actions">
          <CustomButton @action="doSomething" />
          <CustomButton @action="doSomething" />
        </div>
      </template>
    </LargeCard>
  </div>
</template>

<script>
import LargeCard from './components/LargeCard.vue';
import CustomButton from './components/CustomButton.vue';

export default {
  name: 'App',

  components: {
    LargeCard,
    CustomButton,
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
  &__media-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }

  &__actions {
    display: flex;
    justify-content: center;
    position: relative;
    padding: 1.625rem .25rem;

    *:not(:first-child) {
      margin-left: 3rem;
    }
  }
}
</style>
