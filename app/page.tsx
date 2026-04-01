import { HomeProducts } from "@/components";
import HeaderSlider from "@/components/HeaderSlider";
import Navbar from "@/components/Navbar";
import { ProductParams } from "@/shared.types";
import { fetchProducts } from "@/utils";

const products = await fetchProducts();

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <HeaderSlider />

        <HomeProducts products={products as ProductParams[]} />
      </div>
    </>
  );
}
