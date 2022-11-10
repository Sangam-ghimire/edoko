
const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("en-NP", {
    style: "currency",
    currency: "NRs",
    maximumFractionDigits: 2,
  }).format(price / 100);
};

export default FormatPrice;
