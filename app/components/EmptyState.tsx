'use client';

import Container from "./Container";


interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showResult?: boolean
}


const EmptyState: React.FC<EmptyStateProps> = ({
    title,
    subtitle,
    showResult
}) => {
    return (
        <Container>
            <div className="">
                <h1 className="
                    font-bold 
                    text-2xl 
                    leading-[35px]
                    
                ">
                    {title}
                </h1>
                <h2>0 ITEMS</h2>
                <h5>{subtitle}</h5>
            </div>
        </Container>
    )
}

export default EmptyState