import { React, useEffect } from "react";

import "./Timeline.scss";

import jpmc_logo from '../../Images/Icon/jpm_logo.png';
import gt_logo from '../../Images/Icon/gt_logo.png';
import gtia_logo from '../../Images/Icon/gtia_logo.png';
import uh_logo from '../../Images/Icon/uh_logo.png';


function Timeline() {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.target.classList.contains("container")) {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.classList.add("visible");
                            }, index * 200);

                        }
                        if (!entry.isIntersecting) {
                            entry.target.classList.remove("visible");
                        }
                    } else if (entry.target.classList.contains("timeline")) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("line-visible");
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        const containers = document.querySelectorAll(".container");
        const timelineLine = document.querySelector(".timeline");

        containers.forEach((el) => observer.observe(el));
        if (timelineLine) observer.observe(timelineLine);

        return () => {
            containers.forEach((el) => observer.unobserve(el));
            if (timelineLine) observer.unobserve(timelineLine);
        };
    }, []);

    return (
        <section className="timeline-section" id="experience">
            {/* <Background /> */}
            <div className="timeline-box">
                <div className="header-interests">&lt;&gt; EXPERIENCE &lt;&gt;</div>

                <div className="timeline">
                    <div className="container left-container">
                        <img src={jpmc_logo} alt='JPMC' />

                        <div className="text-box jpmc-card">
                            <h2 className="jpmc-text"> Software Engineering Intern </h2>

                            <small>
                                <span className="company"> JPMorgan Chase </span> 2025 Summer
                            </small>

                            {/* <p>
                                Incoming Software Engineering Intern at JPMorgan Chase, where I will work on the Asset Wealth Management Technology team,
                                focusing on developing and innovating AI solutions for the firm.
                            </p> */}

                            <ul>
                                <li>Incoming Software Engineering Intern at JPMorgan Chase</li>
                                <li>Plan to work with Asset Wealth Management Technology team,
                                    focusing on developing and innovating AI solutions for the firm</li>
                            </ul>

                            <span className="left-container-arrow jpmc-arrow"></span>
                        </div>
                    </div>
                    <div className="container right-container">
                        <img src={gt_logo} alt='GT' />

                        <div className="text-box gt-card">
                            <h2 className="gt-text"> CS2340 Teaching Assistant </h2>

                            <small>
                                {" "}
                                <span className="company"> Georgia Institute of Technology </span> 2025 Spring {" "}
                            </small>

                            {/* <p>
                                UTA for CS 2340 Objects and Design under Professor Pedro Guillermo Feijóo-García.
                                I mentored 2 groups throughout the course while guiding them through two projects
                                (a movie listing website and a Pokemon Trading web application) as their client. Additionally,
                                I conducted weekly stand-ups and ensured the completion of at least 18 user stories.
                            </p> */}

                            <ul>
                                <li>Mentored groups throughout Objects and Design Course under Professor Pedro Guillermo Feijóo-García</li>
                                <li>Served as Client for class projects such as a Pokemon Trading and Movie listing app</li>
                                <li>Conducted weekly stand-ups and ensured completion of over 18 user stories</li>
                            </ul>

                            <span className="right-container-arrow gt-arrow"></span>
                        </div>
                    </div>
                    <div className="container left-container">
                        <img src={gtia_logo} alt='gtia' />

                        <div className="text-box gtia-card">
                            <h2 className="gtia-text"> President </h2>

                            <small>
                                {" "}
                                <span className="company"> International Ambassadors at Georgia Tech </span> 2024-2025{" "}
                            </small>

                            {/* <p>
                                Oversaw all initiatives within the organization and managed all external communications with Departments
                                such as the Office of International Education and Student Government Association in order to spread cultural
                                diversity on campus along with provide support, resources, and a home to international students away from home.
                            </p> */}
                            <ul>
                                <li>Oversaw and led all organization initiatives </li>
                                <li>Managed external communication with Office of International Education and Student Government</li>
                                <li>Spread cultural diversity on campus and provided support and resources for international students</li>

                            </ul>

                            <span className="left-container-arrow gtia-arrow"></span>
                        </div>
                    </div>
                    <div className="container right-container">
                        <img src={jpmc_logo} alt='JPMC' />

                        <div className="text-box jpmc-card">
                            <h2 className="jpmc-text"> Software Engineering Intern </h2>

                            <small>
                                <span className="company"> JPMorgan Chase </span> 2024 Summer
                            </small>

                            {/* <p>
                                Worked on the Cloud Markets Success Team in CIB to design an automated TFE validation script using GoLang, AWS Lambda, and S3 for storage to ensure accuracy of about 1000
                                onboarded AWS accounts and improve inventory management and report inconsistencies efficiently. I also integrated over 30 Open
                                Policy Agent policies into an identity management platform to scan AWS resources that are being modified to ensure they meet
                                minimum controls and displayed reports using a react user interface.
                            </p> */}
                            <ul>
                                <li>Improved inventory management and report inconsistencies efficiently through designing a automated TFE validation script</li>
                                <li>Accuracy assurance of over 1000 onboarded AWS accounts </li>
                                <li>Over 30 Open Policy Agent Policies integrated to meet industry and control standards </li>

                            </ul>
                            <span className="right-container-arrow jpmc-arrow"></span>
                        </div>
                    </div>
                    <div className="container left-container">
                        <img src={uh_logo} alt='' />
                        <div className="text-box uh-card">
                            <h2 className="uh-text"> Summer Research Intern </h2>

                            <small>
                                {" "}
                                <span className="company"> University of Houston </span> 2023 Summer {" "}
                            </small>
                            <ul>
                                <li>Research in the Real-Time Systems Lab under Dr. Albert Cheng </li>
                                <li>Developed a Deep Q-Network reinforcement learning model in SUMO (Simulation of Urban Mobility)
                                    to reroute vehicles by predicting the next direction based on traffic data</li>
                            </ul>

                            <span className="left-container-arrow uh-arrow"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
