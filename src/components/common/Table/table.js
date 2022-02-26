import React,{memo} from 'react';

const Table = ({data, header}) =>{

    return( 
        <>
        <div className = 'tableWrap'>
            <table>
                <thead>
                    <tr>
                        {header.map((res,key)=>(<th key={key}>{res.label}</th>))}
                    </tr>
                </thead>
            <tbody>
                {data.map((res,key)=>(
                    <tr key={key}>
                            {header.map((col,index)=>{
                                return (
                                <td key = {index}>
                                {res[col.key]}
                            </td>
                            )} 
                        )}
                    </tr>
                ))}
                
            </tbody>
            </table>
        </div>
    </>
    )

}

export default memo(Table)