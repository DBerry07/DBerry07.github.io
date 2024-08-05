
import Subheading from "../../components/entry/Subheading"
import Title from "../../components/entry/Title"
import EntryBody from "../../components/entry/EntryBody"
import EntryBox from "../../components/entry/EntryBox"
import Body from "../../components/entry/Body"
import MyCertTable from "../../components/entry/MyCertTable"
import {MyCertTableData} from "../my_table_data"

const Certfications = [
    Title({title: "Certificates"}),
    EntryBox({items:[
            Subheading({subheading: ["Certificates and Certifications"]}),
            EntryBody({items:[
                    MyCertTable({items: [new MyCertTableData("Vanderbilt Android Specialization", "https://coursera.org/share/81a17d868080124e5268c36463222908")]})
            ]}),
        ]
    })
]

export default Certfications;