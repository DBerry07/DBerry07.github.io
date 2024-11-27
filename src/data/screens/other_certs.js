
import Subheading from "../../components/panel/Subheading"
import Title from "../../components/panel/Title"
import PanelMainContent from "../../components/panel/PanelMainContent.jsx"
import PanelHolder from "../../components/panel/PanelHolder.jsx"
import Body from "../../components/panel/Body"
import MyCertTable from "../../components/panel/MyCertTable"
import {MyCertTableData} from "../my_table_data"

const Certfications = [
    Title({title: "Certificates"}),
    PanelHolder({items:[
            Subheading({subheading: ["Certificates and Certifications"]}),
            PanelMainContent({items:[
                    MyCertTable({items: [new MyCertTableData("Vanderbilt Android Specialization", "https://coursera.org/share/81a17d868080124e5268c36463222908")]})
            ]}),
        ]
    })
]

export default Certfications;