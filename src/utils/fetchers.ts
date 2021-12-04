export const getFetcher = (url: string) => fetch(url).then((res) => res.json());

export const postFetcher = (url: string, body: object) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

export const patchFetcher = (url: string, body: object) =>
  fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  });
