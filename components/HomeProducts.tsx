
import { ProductParams } from "@/shared.types";
import ProductCard from "./ProductCard";

interface HomeProductsParams {
    products: ProductParams[];
}

export const HomeProducts = ({ products }: HomeProductsParams) => {
    return (
        <div className="flex flex-col items-center pt-14">
            <p className="text-2xl font-medium text-left w-full">Popular products</p>

            <div
                className="
                    grid 
                    max-md:gap-1.5 
                    gap-3
                    mt-6 
                "
            >
                {products.map((product, index: number) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};
