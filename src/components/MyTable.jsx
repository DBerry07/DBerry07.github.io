import MyTableData from "../data/my_table_data";

const MyTable = ({items})  => {
    // items.map((it, index) => {
    //     console.log("item.name=" + it.name + " item.link=" + it.link);
    // });

    const rows = items.map((it, index) => 
        <tr key={index}>
            <td>
                {it.name}
            </td>
            <td>
                {it.link}
            </td>
        </tr>
    )



    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Project Name
                    </th>
                    <th>
                        GitHub Link
                    </th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    
    )
}

export default MyTable;