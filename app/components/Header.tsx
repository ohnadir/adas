'use client'

import Container from "./Container"
import HoverButton from "./HoverButton";

const Header = () => {
    return (
        <div>
            <div 
                style={{
                    backgroundImage: 'url("https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/promo_ss23_endofseasonsale_en_mh_large_d_1a6f64ae86.jpg")',
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "90vh"
                }}
                className="relative"
            >
                <Container>
                    <div className="absolute top-[35%]">
                        <div className="w-fit">
                            <h1 className="text-[40px] font-semibold text-white mb-4">THE END OF YEAR SALE</h1>
                            <div className="flex flex-col gap-3">
                                <HoverButton
                                    label="SHOP MEN"
                                />
                                <HoverButton
                                    label="SHOP WOMEN"
                                />
                                <HoverButton
                                    label="SHOP KIDS"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Header