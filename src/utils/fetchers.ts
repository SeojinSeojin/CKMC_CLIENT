export const getFetcher = (url: string) =>
  fetch(url).then((res) => {
    if (res.ok) return res.json();
    else return res.text();
  });

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

export const deleteFetcher = (url: string) => fetch(url, { method: 'DELETE' });
