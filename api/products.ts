export const fetchData = async (url: string) => {
  const options = {
    method: 'GET'
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const fetchProductList = async () => {
  const url = 'https://fakestoreapi.com/products';
  return await fetchData(url);
};

export const fetchProductDetail = async (id: number) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  return await fetchData(url);
};
