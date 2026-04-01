import { HomeProducts } from "@/components";
import HeaderSlider from "@/components/HeaderSlider";
import { ProductParams } from "@/shared.types";
import { fetchProducts } from "@/utils";

const products = await fetchProducts();

export default function Home() {
  return (
    <>
      <HeaderSlider />
      <HomeProducts products={products as ProductParams[]} />
    </>
  );
}
