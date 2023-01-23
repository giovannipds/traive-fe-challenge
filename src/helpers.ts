export const locale = "en-US";

export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat(locale, {
    currency: "USD",
    style: "currency",
  }).format(amount);

export const formatDateTime = (datetime: string) =>
  new Intl.DateTimeFormat(locale, {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(datetime));
