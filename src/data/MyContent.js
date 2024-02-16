class MyContent {    
    constructor(
        title = "<title>", 
        htmls = [["http://", "example"], ["https://", "example2"]], 
        body = ["This", "is", "an", "empty", "body block."],
        videos = [],) 
        {
        this.title = title;
        this.htmls = htmls;
        this.body = body;
        this.videos = videos;
    }
}

export class Link {
    constructor(html = "", description = "") {
        this.html = "";
        this.description = "";
    }
}

export default MyContent