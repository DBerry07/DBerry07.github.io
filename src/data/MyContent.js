class MyContent {    
    constructor(title = "<title>", body = ["This", "is", "an", "empty", "body block."]) {
        if (title != "") {
            this.title = title;
        }
        this.body = body;
    }
}

export default MyContent