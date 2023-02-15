import * as React from "react";
import Head from "next/head";

import {metaDefaults} from "@/constants";
import {cleanObject} from "@/utils";

const MetaWrapper = ({children, meta}) => {
    const {title, description, image, type, url = ""} = {
        ...metaDefaults({}),
        ...cleanObject(meta)
    };

    let urlClean = url;
    let parts = urlClean?.split('?');
    if (parts[1] !== undefined || parts[1] !== "") {
        urlClean = parts[0];
    }

    return (
        <>
            <Head>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta property="og:url" content={urlClean}/>
                <meta name="og:title" property="og:title" content={title}/>
                <meta property="og:type" content={type}/>
                <meta
                    name="og:description"
                    property="og:description"
                    content={description}
                />
                <meta property="og:image" content={image}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content={""}/>
                <meta property="twitter:url" content={urlClean}/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={image}/>
                <link rel="canonical" href={urlClean}/>

                <meta name="robots"
                      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
            </Head>
            {children}
        </>
    )
}

export default MetaWrapper;
