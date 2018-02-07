import React from 'react'
import parser, { Tag } from 'bbcode-to-react'

class ImgTag extends Tag {
    toReact(){

        const desc = this.params.desc || "";
        const url  = this.params.img || "";

        return(

            <img src={url} alt={desc} />

        );
    }
}

export default ImgTag;