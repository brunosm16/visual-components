export default {
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
};
