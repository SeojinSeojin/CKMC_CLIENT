export const isAllFilled = (...args: any[]) =>
  args.every((arg) => arg !== null && arg !== undefined && arg !== '');
