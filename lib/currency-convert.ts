export const currencyConverter = (amount: number, rate = 12000) => {
  if (typeof amount !== "number" || amount <= 0) {
    throw new Error("Invalid amount. Please provide a positive number.");
  }

  const usdAmount = amount / rate;
  return usdAmount.toFixed(2);
};
