import { Billboard } from "@/types"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async(id: string): Promise<Billboard> => {
    const response = await fetch(`${URL}/${id}`)
    return await response.json()
};

export default getBillboard;