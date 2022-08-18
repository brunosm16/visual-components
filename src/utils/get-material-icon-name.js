export default (rate, currentRating) => {
  if (rate <= currentRating) {
    return 'star';
  }

  if (Math.fround(rate - currentRating) < 1) {
    return 'star_half';
  }

  return 'star_border';
};
