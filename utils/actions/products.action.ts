"use server"

import { createClientFromServer } from "@/utils";


export async function fetchProducts() {
    const supabase = await createClientFromServer();
    let { data: products, error } = await supabase.from('products').select('*');

    if(error){
        console.log(error);
        return [];
    }
    return products;
}
