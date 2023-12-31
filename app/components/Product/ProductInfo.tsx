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
        <div className="mb-5">
            <p className="mb-3">{description}</p>
            <ul className="list-disc relative ml-4">
                <li>Color Shown: {color}</li>
            </ul>
        </div>
    )
}

export default ProductInfo