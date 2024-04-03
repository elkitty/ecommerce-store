import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      headers: {
        Accept: "application/json"
      }
    });

    if (!res.ok) {
      throw new Error("Error al obtener el producto");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    throw error;
  }
};

export default getProduct;
