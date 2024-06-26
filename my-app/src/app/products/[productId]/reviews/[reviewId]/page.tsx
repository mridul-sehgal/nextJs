export default function ReviewId({params}:{
    params:{
        reviewId:String,
        productId:String}
})
{
    return(
        <h1>Review Number {params.reviewId } for Product {params.productId} </h1>
    )
}