
export class MyTableData {
    constructor(
        name = "no-title",
        link = "no-link"
    ) { 
        this.name = name,
        this.link = 
           <a href={link} target="_blank">Project Source Code Link</a> 
        ;
    }
}

export class MyCertTableData {
    constructor(
        name = "no-title",
        link = "no-link"
    ) { 
        this.name = name,
        this.link = 
           <a href={link} target="_blank">Certificate Link</a> 
        ;
    }
}

export default MyTableData;