"use server"

import { createClientFromServer } from '@/utils/supabase/server';


export async function fetchProducts() {
  const supabase = await createClientFromServer();
  let { data: products, error } = await supabase.from('products').select('*');

  //TODO: Replace all this errors by error pages or some feedback for the user
  if (error) {
    console.log(error);
    return [];
  }
  return products;
}

export async function fetchProductById(id: string) {
  const supabase = await createClientFromServer();
  try {
    let { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.log(error);
      return null;
    }

    return product;
  } catch (error) {
    console.log(error);
    return null;
  }
}
