const FORMAT_CURRENCY = (currency: number): string => {
  const locales = undefined;
  const options = {
    style: "currency",
    currency: "CAD",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  return new Intl.NumberFormat(locales, options).format(currency);
};

export default FORMAT_CURRENCY;
