/**
 * Formats a numeric value to a shortened string with suffixes (K, M, B).
 * @param {number} numericValue - The numeric value to be formatted.
 * @returns {string} The formatted string with suffix, or an empty string if numericValue is null or not numeric.
 */
export const formatYAxis = (numericValue) => {
  if (numericValue == null || isNaN(numericValue)) {
    return ''; // Return empty string for null or non-numeric values
  }

  const absValue = Math.abs(numericValue);

  if (absValue >= 1e9) {
    return (numericValue / 1e9).toFixed(1) + 'B';
  } else if (absValue >= 1e6) {
    return (numericValue / 1e6).toFixed(1) + 'M';
  } else if (absValue >= 1e3) {
    return (numericValue / 1e3).toFixed(1) + 'K';
  } else {
    return numericValue.toString();
  }
};
