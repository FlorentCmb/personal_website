// Librairies
import React from 'react'
// Files
import resume_file from '../files/CV.pdf'
// Style
import './Resume.css'

const Resume = () => {
    return (
        <div className="Resume">
            <object className="Resume-File"  data={resume_file} type="application/pdf">
                <p className="Resume-Default-Text">If the PDF isn't displayed you can still download it <a className="Resume-Default-Link" href={resume_file}>here</a>.</p>
            </object>
        </div>
    )
}

export default Resume