import EducationBox from './sections/education/EducationBox';
import WorkBox from './sections/work/WorkBox';

export default function CVTemplate({ generalData, educationData, workData}) {
    return (
        <div className='w-[95vw] max-w-[8.5in] h-[calc(100vw*(22/17))] max-h-[calc(8.5in*(22/17))] border bg-white flex flex-col shadow-xl p-5 overflow-scroll m-3'>    
            <header className='text-center'>
                <h1 className='text-xl leading-0 m-0 font-semibold'>{ generalData.first_name + ' ' + generalData.last_name }</h1>
                <p className='text-base'>{ generalData.email }</p>
                <p className='text-base'>{ generalData.phone_number}</p>
                <p className='text-base'>  { `${generalData.city}, ${generalData.state}`}</p>
            </header>
            <section>
                <h1 className='text-lg mb-0'>Work Experience</h1>
                <hr className='bg-gray-300 text-gray-300 h-[1px] border-gray-300'/>
                { workData.length > 0 &&
                    <ul className='flex flex-col py-3 gap-7'>
                        {
                            workData.map(work => 
                                <li key={work.id}>
                                    <WorkBox workData={work}/>
                                </li>
                            )
                        }
                    </ul>
                }
            </section>
            <section>
                <h1 className='text-lg mb-0'>Education</h1>
                <hr className='bg-gray-300 text-gray-300 h-[1px] border-gray-300'/>
                { educationData.length > 0 &&
                    <div>
                        <ul className='flex flex-col py-3 gap-7'>
                            {educationData.map(education => 
                                {   
                                    return (
                                    <li key={education.id}>
                                        <EducationBox education={education} hello='hello'/>
                                    </li>)
                                }
                            )}
                        </ul>
                    </div>
                }
            </section>
        </div>                                    
    )
}