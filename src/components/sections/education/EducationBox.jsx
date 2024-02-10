import PropTypes from 'prop-types';

export default function EducationBox({ education }) {
    return (<div className='flex flex-col'>
        <div className='flex justify-between'>
            <h2 className='font-semibold text-sm mb-1'>{education.school_name}</h2>
            {
                education.date_started && education.date_graduated && 
                <span className='text-sm'>{`${new Date(education.date_started).getFullYear()} - ${new Date(education.date_graduated).getFullYear()}`}</span>
            }
        </div>
        {
            education.degree_type && education.major && 
            <h2 className='text-sm'>{`${education.degree_type} in ${education.major}`}</h2>
        }
        

    </div>)
}

EducationBox.propTypes = {
    education: PropTypes.object
}