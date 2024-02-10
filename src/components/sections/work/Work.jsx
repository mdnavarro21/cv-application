import { useState, useEffect, useRef } from "react"
import Input from "../../custom/Input";
import FormControl from "../../custom/FormControl";

export default function Work({ formId, handleWorkInfoChange, handleDeleteWork, workData }) {

    const [formStatus, setFormStatus] = useState('empty');
    const ref = useRef(null);
    const fields = [
        {label: 'Company Name:', type: 'text', id: 'company_name', name: 'company_name', value: workData.company_name, ref: ref},
        {label: 'Position Title', type:"text", id:"position_title", name:'position_title', value: workData.position_title},
        {label: 'Responsibilities', type: 'textarea', id: "responsibilities", name: 'responsibilities', value: workData.responsibilities},
        { label: "Date Started", type:"date" ,id:"start_date", name:'start_date', value:workData.start_date},
        { label: "Date Left", type: "date", id: "left_date", name: "left_date", value: workData.left_date}
    ]
    useEffect(() => {
        if (formStatus === 'editing') {
            ref.current.focus();
        }
    }, [formStatus])
    const handleInputChange = (event) => {
        const {name, value } = event.target;
        setFormStatus('typing');
        handleWorkInfoChange(name,value, workData.id)
    }
    return (
        <>
            {
                fields.map((field) => {
                    return (
                        <p key={field.id}>
                            <Input
                                className={ formStatus === 'saved' ? 'border-0 bg-white' : 'border'}    
                                label={field.label}
                                type={field.type}
                                id={field.id + formId}
                                name={field.name}
                                value={field.value}
                                ref={field.ref ? field.ref : null}
                                onChange={handleInputChange}
                            />
                        </p>
                    )
                })
            }
            <FormControl 
                formStatus={formStatus}
                handleStatusChange={(status) => setFormStatus(status)}
                handleDelete={() => handleDeleteWork(workData.id)}
            />
        </>
    )
}
