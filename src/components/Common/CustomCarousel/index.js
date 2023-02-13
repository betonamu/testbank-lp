import React from "react";
import Carousel from "nuka-carousel";

const CustomCarousel = ({
                            children,
                            slidesToScroll = 1,
                            slidesToShow = 1,
                            isInfinity,
                            autoPlay,
                            withoutControls,
                            renderTopLeftControls,
                            renderBottomCenterControls,
                            renderCenterLeftControls,
                            renderCenterRightControls,
                            ...props
                        }) => {

    return (
        <Carousel
            cellSpacing={40}
            slidesToScroll={slidesToScroll}
            slidesToShow={slidesToShow}
            autoplay={autoPlay}
            wrapAround={isInfinity}
            withoutControls={withoutControls}
            renderTopLeftControls={renderTopLeftControls}
            renderBottomCenterControls={renderBottomCenterControls}
            renderCenterLeftControls={renderCenterLeftControls}
            renderCenterRightControls={renderCenterRightControls}
            {...props}>
            {children}
        </Carousel>
    )
}

export default CustomCarousel;