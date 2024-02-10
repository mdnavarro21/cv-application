import EducationForm from "./sections/education/EducationForm";
import WorkForm from "./sections/work/WorkForm";
import Collapsible from './custom/Collapsible';
import GeneralInfoForm from './sections/general/GeneralInfoForm';

export default function CVForm({ 
    generalData, 
    educationData, 
    workData, 
    handleAddEducation,
    handleAddWork,
    handleEducationInfoChange,
    handleWorkInfoChange,
    handleGeneralInfoChange,
    handleDeleteEducation,
    handleDeleteWork,
    handleSubmit,
    }) {


    return (
            <form onSubmit={ handleSubmit } className='flex flex-col gap-2 p-3'>
                <section className='border-b-2'>
                    <Collapsible  label={"General Information"} imageUrl={'/person.svg'}>
                        <GeneralInfoForm
                            generalData={generalData}
                            handleGeneralInfoChange={handleGeneralInfoChange}
                        />
                    </Collapsible>
                </section>
                <section className='border-b-2'>
                    <Collapsible label={"Education"} imageUrl={'/school.svg'}>
                        <EducationForm
                            educationData={educationData}
                            handleAddEducation = {handleAddEducation}
                            handleDeleteEducation={handleDeleteEducation}
                            handleEducationInfoChange={handleEducationInfoChange}
                        />
                    </Collapsible>
                </section>
                <section className='border-b-2'>
                    <Collapsible  label={"Work Experience"} imageUrl={'/work.svg'}>
                        <WorkForm
                            workData={workData}
                            handleAddWork={handleAddWork}
                            handleDeleteWork={handleDeleteWork}
                            handleWorkInfoChange={ handleWorkInfoChange }
                        />
                    </Collapsible>
                </section>

            </form>
    )
}
