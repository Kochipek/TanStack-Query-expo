const fetchProductList = async () => {
  const url = 'https://fakestoreapi.com/products';
  const options = {
    method: 'GET'
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
    return null; // Hata durumunda null döndürülebilir veya uygun bir işlem yapılabilir.
  }
}

export default fetchProductList;
