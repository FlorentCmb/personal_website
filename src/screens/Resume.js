// Librairies
import React from 'react'
// Files
import resume_file from '../files/CV.pdf'
// Style
import './Resume.css'

const Resume = () => {
    return (
        <div className="Resume">
            <embed className="Resume-File" src={resume_file} type="application/pdf" />
        </div>
    )
}

export default Resume