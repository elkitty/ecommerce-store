import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true});
    const billboard = await getBillboard("05e39647-43a6-4010-af32-f5ef7cbb16e6");
    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            
            <div className="flex flex-col gap-y-8 p-x-4 sm:px-6 lg: p-x-8">
               <ProductList title="Featured Products" items={products}/> 
            </div>
            </div>
        </Container>
     );
}
  
export default HomePage;
