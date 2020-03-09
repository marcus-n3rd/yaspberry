export const somethingGet = (rawData) => {
  // Pseudo-class instantiation
  return { ...rawData };
};

// Prepares data, does not actually write it
export const somethingWrite = (rawData) => {
  // Pseudo-class instantiation with mutation
  return { ...rawData, version: (new Date()).toISOString() };
}
