export default {
  inject: {
    starRating: {
      default() {
        const componentName = this?.$options?.name || 'This Component';
        console.error(`${componentName} needs to be a child of StarRating`);
      },
    },
  },
};
