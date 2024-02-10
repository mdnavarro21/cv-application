import Work from "./Work";
import { useRef } from "react";
import { flushSync } from "react-dom";
export default function WorkForm({workData, handleAddWork, handleWorkInfoChange, handleDeleteWork}) {
    const ref = useRef(null);
    return (
        <div className='flex flex-col gap-3'> 
            <ul className='flex flex-col gap-3' ref={ref}>
                { workData.map((work, index) => 
                    <li key={work.id} className="bg-white flex flex-col gap-4 p-5">
                        <Work
                            formId={index}
                            handleWorkInfoChange={ handleWorkInfoChange } 
                            handleDeleteWork={ handleDeleteWork } 
                            workData={workData.find(workData => workData.id === work.id )} />
                    </li>
                    ) 
                }
            </ul>
            <button onClick={ (event) =>{ 
                event.preventDefault();
                flushSync(handleAddWork);
                setTimeout(() => ref.current.lastChild.scrollIntoView({behavior: 'smooth'}), 400);
                }}>Add Work</button>
        </div>
    )
}