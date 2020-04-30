export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const popFormat = (population) => {
  return new Intl.NumberFormat().format(population);
};
