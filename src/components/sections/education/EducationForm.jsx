import { useRef } from 'react';
import Education from './Education';
import { flushSync } from 'react-dom';

export default function EducationForm({educationData, handleEducationInfoChange, handleAddEducation, handleDeleteEducation}) {
    const ref = useRef(null);

    return (
        <div className="flex flex-col gap-3">
            <ul className='flex flex-col gap-3' ref={ref}>
                { educationData.map((educationItem, index) => {
                        return(
                            <li key={educationItem.id} className='bg-white flex flex-col gap-4 p-5'>
                                <Education 
                                    formId={index} 
                                    handleEducationInfoChange={ handleEducationInfoChange } 
                                    handleDeleteEducation={ handleDeleteEducation } 
                                    educationData={ 
                                        educationData.find(education => education.id === educationItem.id )
                                    }
                                />
                            </li>)
                    }) 
                }
            </ul>
            <button className='font-medium' onClick={ (event) => {
                event.preventDefault();
                flushSync(handleAddEducation);
            
                setTimeout(() => ref.current.lastChild.scrollIntoView({behavior: 'smooth'}), 400);
            }}>Add Education</button>
        </div>   
    )
}