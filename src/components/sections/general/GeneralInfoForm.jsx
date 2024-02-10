import FormControl from "../../custom/FormControl";
import Input from "../../custom/Input";
import { useState, useRef, useEffect } from "react";
export default function GeneralInfoForm({
    generalData,
    handleGeneralInfoChange
}) {
    const [formStatus, setFormStatus] = useState("empty");
    const firstNameRef = useRef(null);
    useEffect(() => {
        if (formStatus === 'editing' || formStatus ==='empty') {
            firstNameRef.current.focus();
        }
    }, [formStatus])
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormStatus("typing");
        handleGeneralInfoChange(name, value);
    }
    const fields = [
        { label: "First Name:", type: "text", id: "first_name", name: "first_name", value: generalData.first_name, ref: firstNameRef},
        {label: "Last Name:", type: "text" ,id: 'last_name' ,name: "last_name", value: generalData.last_name},
        {label:"City:", type: "text" ,id: 'city' ,name: "city", value: generalData.city},
        {label: "State/Province:" ,type: "text" ,id: 'state' ,name: "state", value: generalData.state},
        {label: "Phone Number" ,type: "tel" ,id: 'phone_number' ,name: "phone_number",value: generalData.phone_number},
        {label: "Email", type: "email" ,id: 'email' ,name: "email", value: generalData.email}
    ]

    return (
        <div className="flex flex-col gap-2 bg-white p-4">
                {
                    fields.map((field) => {
                        return (
                            <p key={field.id}>
                                <Input
                                    className={ formStatus === 'saved' ? 'border-0 bg-white' : 'border'}
                                    label= {field.label} 
                                    type={field.type} 
                                    name={field.name}
                                    id={field.id}
                                    onChange={ handleInputChange } 
                                    value={field.value} 
                                    ref={field.ref ? field.ref : null}
                                    autoComplete={"off"}
                                    disabled={formStatus === 'saved' ? true : false}/> 
                            </p>
                        )
                    })
                }
            <FormControl 
                formStatus={formStatus}
                handleStatusChange={(status) => setFormStatus(status) }
            />
        </div>
    )
}