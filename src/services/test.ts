export const getAPIstuff = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const result: T = await response.json();
  return result;
};
