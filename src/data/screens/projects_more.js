import Subheading from "../../components/panel/Subheading"
import Title from "../../components/panel/Title"
import EntryBody from "../../components/panel/EntryBody"
import EntryBox from "../../components/panel/EntryBox"
import Body from "../../components/panel/Body"
import MyTable from "../../components/panel/MyTable"

import {MyTableData} from "../my_table_data"
import { locations } from "../constants/filelocs"
import { getText } from "../constants/fetching"





export const MoreProjects = [
    Title({title: "Additional Projects"}),
    EntryBox({items:[
            Subheading({subheading: ["Additional projects I have worked on"]}),
            EntryBody({items:[
                    MyTable({items: [new MyTableData("MaintainX", "https://github.com/DBerry07/Revature_TrainingRoomMaintenanceScheduler")]})
            ]}),
        ]
    })
]