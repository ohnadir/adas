'use client'

import Image from "next/image";
import Container from "./Container"
import HoverButton from "./HoverButton";

const Header = () => {
    return (
        <div>
            <div 
                className="
                    relative
                    sm:bg-[url(https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/promo_ss23_endofseasonsale_en_mh_large_t_735689fc9d.jpg)]
                    bg-[url(https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_600,w_600/promo_ss23_endofseasonsale_en_mh_large_m_09e35a6cc9.jpg)]
                    lg:bg-[url(https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/promo_ss23_endofseasonsale_en_mh_large_d_1a6f64ae86.jpg)]
                    bg-no-repeat
                    h-[90vh] !important
                    object-cover
                    aspect-auto
                "
            > 
                <Container>
                    <div className="
                            absolute
                            bottom-[5%]
                            lg:bottom-0 
                            lg:top-[35%]
                        "
                    >
                        <div className="w-fit">
                            <h1 className="text-[40px] font-semibold text-white mb-4">THE END OF YEAR SALE</h1>
                            <div className="flex flex-col gap-3">
                                <HoverButton
                                    label="SHOP MEN"
                                    url="/men"
                                />
                                <HoverButton
                                    label="SHOP WOMEN"
                                    url="/women"
                                />
                                <HoverButton
                                    label="SHOP KIDS"
                                    url="/kids"
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