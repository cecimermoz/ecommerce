import {ProductDetails} from '@/components';
import { fetchProductById } from '@/utils';

export default async function Product({params}: {params: Promise<{id: string}>}) {
  const { id } = await params;
  const product = await fetchProductById(id);

  return (
   <>
     <ProductDetails product={product} />
   </>
  )
}

