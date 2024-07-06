/**
 * Gets random delay in range
 * @param min - Minimum value for range
 * @param max - Maximum value for range
 * @returns
 */
export const getDelayInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};
