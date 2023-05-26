import {React} from 'react';
import {Box} from "@mui/material";
import './AboutMe.scss';


function AboutMe() {
    const PersonalFact = (props) => {
        const { title, body } = props;
        return (
            <div className="personal-facts-item"> 
                <h5>{title}</h5>
                <p>{body}</p>
            </div>
        );
    }

    return(
        <section className="about-me">
            <Box className="personal-facts">
                <Box className="firstCol">
                    <PersonalFact title="Education" body={
                        <>
                            B.S Computer Science | Intelligence & Information Internetworks
                            <br/>
                            Georgia Institute of Technology | GPA 4.0/4.0 | Faculty Honors
                        </>
                    }/>
                </Box>
                <Box className="SecondCol">
                    <PersonalFact title="Education" body={
                        <>
                            B.S Computer Science | Intelligence & Information Internetworks
                            <br/>
                            Georgia Institute of Technology | GPA 4.0/4.0 | Faculty Honors
                        </>
                    }/>
                </Box>

            </Box>
        </section>
    );
}
export default AboutMe;