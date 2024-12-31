export const isJsonString = (data: string) => {
  try {
    JSON.parse(data);
  }
  catch {
    return false;
  }
  return true;
};