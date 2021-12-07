export const urlEncoder = (url: string) =>
  url.replaceAll(':', '%3A').replaceAll('+', '%2B').replace('https%3A', 'https:');
