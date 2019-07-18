// REQUIRES NPM INSTALL FRACTIONAL

import { Fraction } from "fractional";

// TURN DECIMALS INTO FRACTIONS
//----------------------------------------------------------------------------------------

const formatCount = count => {
  if (count) {
    // count = 2.5 --> 2 1/2
    // count = 0.5 --> 1/2
    const [int, dec] = count
      .toString()
      .split(".")
      .map(cur => parseInt(cur, 10));

    if (!dec) return count;

    if (int === 0) {
      const fr = new Fraction(count);
      return `${fr.numerator}/${fr.denominator}`;
    } else {
      const fr = new Fraction(count - int);
      return `${int} ${fr.numerator}/${fr.denominator}`;
    }
  }

  return "?";
};
