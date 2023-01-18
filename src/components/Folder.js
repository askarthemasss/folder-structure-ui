import { useState } from 'react';
import { FcOpenedFolder, FcFile } from 'react-icons/fc';

const Folder = ({data}) => {
    const [isFolderOpen, setIsFolderOpen] = useState(true)

    // console.log(data);

    return(
        <>
            {/* <div>Folder Component</div> */}
            {/* {data.length !== 0 && data.map(item => {
                // If folder, add Folder Icon
                if(item.isFolder){
                    return (
                        <>
                            <div
                                className='folder-span'
                                key={item.id}
                                onClick={() => setIsFolderOpen(!isFolderOpen)}
                                // style={{zIndex:"-1"}}
                            >
                                <FcOpenedFolder/>
                                {" "}{item.name}
                                <br/>
                            </div>
                            {isFolderOpen && <Folder data={item.items}/>}
                        </>
                    )    
                }
                // If file, add file Icon
                return (
                    <div
                        className='file-span'
                        key={item.id}
                    >
                        <FcFile />
                        {" "}{item.name}
                        <br/>
                    </div>
                )
            })} */}
            {data.length !== 0 && data.map(item => {
                // If folder, add Folder Icon
                if(item.isFolder){
                    return (
                        <>
                            <div
                                className='folder-span'
                                key={item.id}
                                onClick={() => setIsFolderOpen(!isFolderOpen)}
                                // style={{zIndex:"-1"}}
                            >
                                <FcOpenedFolder/>
                                {" "}{item.name}
                                <br/>
                            </div>
                            {isFolderOpen && <Folder data={item.items}/>}
                        </>
                    )    
                }
                // If file, add file Icon
                return (
                    <div
                        className='file-span'
                        key={item.id}
                    >
                        <FcFile />
                        {" "}{item.name}
                        <br/>
                    </div>
                )
            })}
        </>
    )
}

export default Folder;