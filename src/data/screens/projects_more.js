import Subheading from "../../components/entry/Subheading"
import Title from "../../components/entry/Title"
import EntryBody from "../../components/entry/EntryBody"
import EntryBox from "../../components/entry/EntryBox"
import Body from "../../components/entry/Body"
import MyTable from "../../components/entry/MyTable"

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