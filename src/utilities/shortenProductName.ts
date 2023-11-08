interface Product {
  name: string;
}

const SHORTEN_PRODUCT_NAME = ({ name }: Product): string => {
  const lastIndex = name.lastIndexOf(" ");
  let parsedName = name.substring(0, lastIndex);

  parsedName = parsedName
    .replace(/Mark/g, "MK")
    .replace(/Wireless/g, "")
    .trimEnd();

  return parsedName;
};

export default SHORTEN_PRODUCT_NAME;
