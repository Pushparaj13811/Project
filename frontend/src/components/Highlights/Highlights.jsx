import React from 'react'
import Card from '../Card/Card';
import links from '@/Links/links';
import Video from '../Video/Video';

function Highlights() {
    return (


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {links.map(function (contents, index) {
                if (contents.linktype === "image") {
                    return <Card key={index} image={contents.content} />;
                } else if (contents.linktype === "video") {

                    return <Video key={index} video={contents.content} />;
                }
            })}
        </div>
    )
}

export default Highlights
