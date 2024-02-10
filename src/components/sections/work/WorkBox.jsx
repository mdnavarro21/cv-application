import PropTypes from 'prop-types';

export default function WorkBox({ workData}) {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between -mb-1'>
                <h2 className='font-semibold text-sm leading-3'>{workData.position_title}</h2>
                <p className='text-sm'>{`${new Date(workData.start_date).getFullYear()} - ${ new Date(workData.left_date).getFullYear()}`}</p>
            </div>
            <h2 className='mb-2 text-xs'>{workData.company_name}</h2>
            <p className='text-xs'>{workData.responsibilities}</p>
        </div>
    )
}

WorkBox.propTypes = {
    workData: PropTypes.object
}