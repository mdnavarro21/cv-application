//import CVPreview from './components/CVpreview'
import { useState } from 'react'
import CVForm from './components/CVForm'
import CVTemplate from './components/CVTemplate';
import Logo from '/src/assets/resume_logo.svg';

function App() {
  const [generalData, setGeneralData] = useState({ first_name: '', last_name: '', city: '', state: '', phone_number: '', email: ''});
  const [educationData, setEducationData] = useState([]);
  const [workData, setWorkData] = useState([]);

  const handleGeneralInfoChange = (name, value) => {
    setGeneralData((prevData) => ({ ...prevData, [name]: value }));
}

const handleEducationInfoChange = (name, value, id) => {
    setEducationData((prevData)=> {
        return prevData.map(education => {
            if (education.id === id) {
                return { ...education, [name]: value}
            }
            else {
                return education
            }
        })
    });
}

const handleWorkInfoChange = (name, value, id) => {
    setWorkData((prevData)=> {
        return prevData.map(work => {
            if (work.id === id) {
                return { ...work, [name]: value}
            }
            else {
                return work
            }
        })
    });
}

const handleAddEducation = () => {
    const newEducation = {
        id: crypto.randomUUID(),
        school_name: '',
        degree_type: '',
        major: '',
        date_started: '',
        date_graduated: '',
    }
    setEducationData((prevData) => [...prevData, newEducation])

}

const handleAddWork = () => {
    const newWork = {
        id: crypto.randomUUID(),
        company_name: '',
        position_title: '',
        responsibilities: '',
        start_date: '',
        left_date: '',
    }
    setWorkData((prevData) => [...prevData, newWork])

}


const handleDeleteEducation = (id) => {
    setEducationData((prevData) => {
        return prevData.filter(education => 
            education.id !== id
        )
    })
}

const handleDeleteWork = (id) => {
    setWorkData((prevData) => {
        return prevData.filter(work =>
            work.id !== id
        )
    })
}
const handleSubmit = (event) => {
    event.preventDefault();
}
const loadResume = () => {
    setGeneralData({
        first_name: 'Paul', 
        last_name: 'Erdös', 
        city: 'Budapest', 
        state: 'Hungary', 
        phone_number: '06-1-326-1913', 
        email: 'PaulErdosPGOM@gmail.com'})
    setEducationData([
        {
            id: crypto.randomUUID(), 
            school_name: 'University of Budapest', 
            degree_type: 'Doctor of Philosophy',
            major: 'Mathematics', 
            date_started: '1930-04-22', 
            date_graduated: '1934-06-22'
        },
        {
            id: crypto.randomUUID(), 
            school_name: 'University of Budapest', 
            degree_type: 'Bachelor of Science',
            major: 'Mathematics', 
            date_started: '1930-04-22', 
            date_graduated: '1934-06-22'
        },
    ])
    setWorkData([{
        id: crypto.randomUUID(),
        company_name: 'University of Manchester',
        position_title: 'Postdoctoral Fellow',
        responsibilities: 'Pursued and proposed problems in discrete mathematics, graph theory, number theory, mathematical analysis, approximation theory, set theory, and probability theory.',
        start_date: '1934-01-01',
        left_date: '1938-01-01',
        },
        {
            id: crypto.randomUUID(),
            company_name: 'Institute for Advanced Study',
            position_title: 'Fellow',
            responsibilities: `Pursued and proposed problems in discrete mathematics, graph theory, number theory, mathematical analysis, approximation theory, set theory, and probability theory.`,
            start_date: '1938-01-01',
            left_date: '1938-01-01',
        },
        {
            id: crypto.randomUUID(),
            company_name: 'University of Notre Dame',
            position_title: 'Professor',
            responsibilities: `Pursued and proposed problems in discrete mathematics, graph theory, number theory, mathematical analysis, approximation theory, set theory, and probability theory. Work centered around discrete mathematics`,
            start_date: '1952-11-20',
            left_date: '1954-05-22',
        },
        {
            id: crypto.randomUUID(),
            company_name: 'Hebrew University',
            position_title: 'Professor',
            responsibilities: `Pursued and proposed problems in discrete mathematics, graph theory, number theory, mathematical analysis, approximation theory, set theory, and probability theory.`,
            start_date: '1954-11-20',
            left_date: '1954-05-22',
        }
    ]);
}
const clearResume = () => {
    setGeneralData({ first_name: '', last_name: '', city: '', state: '', phone_number: '', email: ''});
    setEducationData([]);
    setWorkData([]);
}
  return (
    <>
      <main className='flex flex-col justify-evenly items-center gap-2 bg-slate-100 text-black sm:flex-row sm:items-start' >
        <div className='border-2'>
            <header className='border-b-2 flex flex-col p-3'>
                <div className="flex items-stretch m-3">
                    <img src={Logo} alt="logo" width={80} height={80} />
                    <h1 className='font-bold text-lg grow'>Resume Builder</h1>
                </div>
                <p className="text-slate-600 text-base">Fill in the information below to create your resume</p>
            </header>
            <CVForm
              generalData={generalData}
              educationData={educationData}
              workData={workData}
              loadResume={loadResume}
              handleAddEducation={handleAddEducation}
              handleAddWork={handleAddWork}
              handleEducationInfoChange={handleEducationInfoChange}
              handleGeneralInfoChange={handleGeneralInfoChange}
              handleWorkInfoChange={handleWorkInfoChange}
              handleDeleteEducation={handleDeleteEducation}
              handleDeleteWork={handleDeleteWork}
              handleSubmit={ handleSubmit }
            />
        </div>  
        <div className='flex gap-2 items-center p-3 max-w-min sm:flex-col'>
            <button className='rounded-md bg-sky-700 text-white font-bold' type="button" onClick={loadResume}>Generate Example Resume</button>
            <button className='rounded-md bg-red-700 text-white font-bold'onClick={clearResume}>Clear Resume</button>
        </div>
        <CVTemplate
        generalData={generalData}
        educationData={educationData}
        workData={workData}
        /> 
      </main>
    </>
  )
}

export default App
