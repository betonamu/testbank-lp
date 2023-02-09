import React from "react";
import Banner from "@/components/Home/Banner";
import OutstandingFeature from "@/components/Home/OutstandingFeature";

export default function Home() {
    return (
        <div className={"container"}>
            <Banner/>
            <OutstandingFeature/>
        </div>
    )
}
