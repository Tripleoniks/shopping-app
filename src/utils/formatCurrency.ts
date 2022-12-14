const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'NGN',
  minimumFractionDigits: 2,
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
