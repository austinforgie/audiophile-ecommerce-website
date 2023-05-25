const SHORTEN_PRODUCT_NAME = (product) => {
  const lastIndex = product.name.lastIndexOf(" ");
  let parsedName = product.name.substring(0, lastIndex);

  if (parsedName.includes("Mark"))
    parsedName = parsedName.replace("Mark", "MK");
  else if (parsedName.includes("Wireless"))
    parsedName = parsedName.replace("Wireless", "").trimEnd();

  return parsedName;
};

export default SHORTEN_PRODUCT_NAME;
