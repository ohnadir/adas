'use client'

interface ProductInfoProps{
    description:string,
    color:string
} 

const ProductInfo: React.FC<ProductInfoProps> = ({
    description,
    color

}) => {
    return (
        <div className="">
            <p className="mb-3">{description}</p>
            <ul className="list-disc">
                <li>Color Shown: {color}</li>
            </ul>
        </div>
    )
}

export default ProductInfo