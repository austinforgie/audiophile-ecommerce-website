const SHORTEN_PRODUCT_NAME = (product: { name: string }): string => {
  const lastIndex = product.name.lastIndexOf(" ");
  let parsedName = product.name.substring(0, lastIndex);

  parsedName = parsedName
    .replace(/Mark/g, "MK")
    .replace(/Wireless/g, "")
    .trimEnd();

  return parsedName;
};

export default SHORTEN_PRODUCT_NAME;
