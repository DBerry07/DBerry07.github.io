
class MyTableData {
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

export default MyTableData;