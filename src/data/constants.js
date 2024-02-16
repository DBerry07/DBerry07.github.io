
export class Tab {
    static Hello = new Tab("Hello");
    static Webpage = new Tab("Webpage");
    static Coursera = new Tab("Coursera");
    static Filler = new Tab("Filler");

    constructor(name) {
        this.name = name;
    }

    toString() {
        return this.name;
    }
}