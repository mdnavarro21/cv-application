import { useState, useRef, useEffect } from "react";
import Input from "../../custom/Input";
import FormControl from "../../custom/FormControl";

export default function Education({ formId, handleEducationInfoChange, handleDeleteEducation, educationData }) {
    const [formStatus, setFormStatus] = useState('empty');
    const ref = useRef(null);
    const fields = [
        { label: "School Name", type: "text", id: "school_name", name: "school_name", value: educationData.school_name, ref: ref},
        { label: "Degree Type", type: "text", id: "degree_type", name: "degree_type", value: educationData.degree_type},
        { label: "Major", type: "text", id: "major", name: "major", value: educationData.major},
        { label: "Date Started", type: "date", id: "date_started", name: "date_started", value: educationData.date_started},
        { label: "Date Graduated", type: "date", id: "date_graduated", name: "date_graduated", value: educationData.date_graduated}
    ]
    useEffect(() => {
        if (formStatus === 'editing' || formStatus === 'empty') {
            ref.current.focus();
        }
    }, [formStatus])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormStatus('typing');
        handleEducationInfoChange(name, value, educationData.id)
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
                                onChange={handleInputChange}
                                ref={field.ref ? field.ref : null}
                                disabled={formStatus === 'saved' ? true : false}
                            />
                        </p>
                    )
                })
            }
            <FormControl 
                formStatus={formStatus}
                handleStatusChange={(status) => setFormStatus(status) }
                handleDelete={() => handleDeleteEducation(educationData.id)}
            />
        </>
    )
}