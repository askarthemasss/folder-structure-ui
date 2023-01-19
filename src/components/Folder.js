import { useState } from 'react';
import { FcOpenedFolder, FcFile } from 'react-icons/fc';

const Folder = ({data}) => {
    const [isFolderOpen, setIsFolderOpen] = useState(true)

    // console.log(data);

    // ============== Old Solution ===============
    // return(
    //     <>
    //         {/* <div>Folder Component</div> */}
    //         {data.isFolder && data.items && data.items.map(item => {
    //             // If folder, add Folder Icon
    //             if(item.isFolder){
    //                 return (
    //                     <>
    //                         <div
    //                             className='folder-span'
    //                             key={item.id}
    //                             onClick={() => setIsFolderOpen(!isFolderOpen)}
    //                             // style={{zIndex:"-1"}}
    //                         >
    //                             <FcOpenedFolder/>
    //                             {" "}{item.name}
    //                             <br/>
    //                         </div>
    //                         {/* {isFolderOpen && <Folder data={item.items}/>} */}
    //                         <div>
    //                             {item.items.map(exp => {
    //                                 return <Folder key={exp.id} data={exp}/>
    //                             })}
    //                         </div>
    //                     </>
    //                 )    
    //             }
    //             // If file, add file Icon
    //             return (
    //                 <div
    //                     className='file-span'
    //                     key={item.id}
    //                 >
    //                     <FcFile />
    //                     {" "}{item.name}
    //                     <br/>
    //                 </div>
    //             )
    //         })}
    //     </>
    // )
    
    // ============ New ===================
    if(data.isFolder){
        // If folder, add Folder Icon
        return (
            <>
                <div
                    className='folder-span'
                    onClick={() => setIsFolderOpen(!isFolderOpen)}
                >
                    <FcOpenedFolder/>
                    {" "}{data.name}
                </div>
                <br/>
                <div style={{ display: isFolderOpen ? "block" : "none", paddingLeft: 25 }}>
                    {data.items.map(exp => {
                        return (
                            <Folder
                                key={exp.id}
                                data={exp}
                            />
                        )
                    })}
                </div>
            </>
        )    
    } else {
        // If file, add file Icon
        return (
            <div className='file-span' key={data.id}>
                <FcFile />
                {" "}{data.name}
                <br/>
            </div>
        )
    }

    
}

export default Folder;