import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SocialShare from "./SocialShare";

export default function HeroBanners() {
    return (
        <Carousel>
            <div>
                <img src="/images/company_banner.jpg" />
            </div>
            <div>
                <img src="/images/main_back2.png" />
            </div>
        </Carousel>
    )
}
