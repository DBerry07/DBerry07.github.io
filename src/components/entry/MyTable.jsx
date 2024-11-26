import MyTableData from "../../data/my_table_data";
// import './my-table.css';

const MyTable = ({items})  => {
    // items.map((it, index) => {
    //     console.log("item.name=" + it.name + " item.link=" + it.link);
    // });

    const rows = items.map((it, index) => 
        <tr key={index}>
            <td>
                {it.name}
            </td>
            <td className='text-blue-600'>
                {it.link}
            </td>
        </tr>
    )



    return (
        <table className='w-full text-center'>
            <thead>
                <tr>
                    <th>
                        Project
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