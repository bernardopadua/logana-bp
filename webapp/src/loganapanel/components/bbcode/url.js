import React from 'react'
import parser, { Tag } from 'bbcode-to-react'

class UrlTag extends Tag {
    toReact(){
        return (
            <a href={this.params.url}> {this.getContent(true)} </a>
        );
    }
}

export default UrlTag;