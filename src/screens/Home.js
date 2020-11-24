// Librairies
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Components
import ListContainer from '../components/ListContainer'
// Icons
import {
    faUser,
    faMapPin,
    faBusAlt,
    faBuilding,
    faLanguage,
    faCode,
    faBook,
    faFileCode,
    faTools,
    faProjectDiagram,
    faGamepad,
    faPhone,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import {
    faUbuntu,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'
// Style
import './Home.css'

const Home = () => {

    return (
        <section className="Home">
            <ListContainer
                title="About me :"
                listArray={[
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faUser} /> Age</span>, value: "20" },
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faBusAlt} /> Means of transport</span>, value: "Public transportation" },
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faMapPin} /> Location</span>, value: "Île-De-France, France" },
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faBuilding} /> Years of experience</span>, value: "< 1" },
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faLanguage} /> Languages</span>, value: "French / english" },
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faGamepad} /> Hobbies</span>, value: "Video games, music, movies, algorithms" }
                ]}
            />
            <ListContainer
                title="Tech stack :"
                listArray={[
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faUbuntu} /> OS</span>, value: "Ubuntu / Windows" },
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faCode} /> Languages</span>, value: "Javascript, HTML, CSS, SQL" },
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faBook} /> Main librairies</span>, value: "react, redux, react-router-dom, axios, nodejs, express" },
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faFileCode} /> IDE</span>, value: "Visual Studio Code" },
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faTools} /> Tools</span>, value: "Postman, Git, Trello, Jira, Slack" },
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faProjectDiagram} /> Working methods</span>, value: "Agile methods, SCRUM, pair programming" }
                ]}
            />
            <ListContainer
                title="Contact :"
                listArray={[
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faGithub} /> Github</span>, value: "FlorentCmb" },
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</span>, value: "Florent Combeau" },
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faPhone} /> Téléphone</span>, value: "06 18 62 19 36" },
                    { name: <span title="Icon by FontAwesome"><FontAwesomeIcon icon={faEnvelope} /> E-mail</span>, value: "florent.combeau@protonmail.ch" },
                ]}
            />
        </section>
    )
}

export default Home