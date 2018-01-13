export default class BBCodeParser {
    constructor(textToParse){
        this.toParse = textToParse;
        this.tags = {
            b: {
                rg: /\[b\].+\[\/b\]/,
                tag: 'b'
            },
            list: {
                rg: /$/,
                tag: 'ul'
            },
            li: {
                rg: /$/,
                tag: 'li'
            }
        };
    }

    testMe(){
        console.log(this.toParse);
    }

    outHtml(){
        const inputTag = (tag, text) => {
            return '<'+tag+'>' + text + '</'+tag+'>';
        };
        
        const text = this.toParse;
        for (i in this.tags){
            const rgx = this.tags[i]['rg'];
            while((rs=rgx.exec(text))!=null){
                const prev = text.slice(0, rs.index);
                const post = text.slice(rs.index+rs[0].length, text.length);
                text = prev + inputTag(this.tags[i]['tag'], rs[1]) + post;
            }
        }
    }
}