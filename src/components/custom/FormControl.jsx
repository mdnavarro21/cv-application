export default function FormControl({formStatus, handleStatusChange, handleDelete}) {
    return (
        <div className="flex gap-2 mt-3 text-base">
                <button className='disabled:opacity-60 bg-sky-700 text-white'disabled={formStatus !== 'typing'} onClick={ () => {handleStatusChange('saved')}}>Save</button>
                {formStatus === 'editing' &&
                    <button onClick={() => handleStatusChange("saved")}>Cancel</button>
                }
                {formStatus === 'saved' &&
                    <button onClick={() => { handleStatusChange('editing')}}>Edit</button>
                }
                
                {   handleDelete ?
                    <button onClick={ handleDelete }>Delete</button> :
                    null
                }
        </div>
    )
}