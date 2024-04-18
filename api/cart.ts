export const addToCart = async (productId: string, quantity: number) => {
    const response = await fetch(`/api/cart`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        productId,
        quantity,
        }),
    });
    if (!response.ok) {
        throw new Error("Failed to add item to cart");
    }
    return response.json();
}