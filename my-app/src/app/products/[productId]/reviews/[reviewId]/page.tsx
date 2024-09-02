import { notFound } from "next/navigation"
export default function ReviewId({params}:{
    params:{
        reviewId:string,
        productId:string}
})
{
    if(parseInt(params.reviewId)>1000){
        notFound();
    }
    return(
        <h1>Review Number {params.reviewId } for Product {params.productId} </h1>
    )
} 