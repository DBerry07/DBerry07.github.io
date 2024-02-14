class MyContent {    
    constructor(title = "<title>", htmls = [["http://", "example"], ["https://", "example2"]], body = ["This", "is", "an", "empty", "body block."]) {
        this.title = title;
        this.htmls = htmls;
        this.body = body;
    }
}

export class Link {
    constructor(html = "", description = "") {
        this.html = "";
        this.description = "";
    }
}

export default MyContent