import React from 'react';

const Team = () => {
    return (
        <section id="team">
            <div className="container">
                <h2>Our Expert Team: Your Outsourced Competency</h2>
                <p className="centered-p">Gain direct access to a dedicated team of specialists.</p>
                <div className="team-grid">
                    {/* === TEAM MEMBER 1: Rinat Shakenov === */}
                    <div className="team-member">
                        <img src={process.env.PUBLIC_URL + '/images/rinat.jpeg'} alt="Rinat Shakenov" />
                        <h4>Rinat Shakenov</h4>
                        <p className="role">Project Manager<br/>(Rep. ТОО "Актуарный консультант")</p>
                        <p className="expertise">Oversees project execution, leveraging Actuarial Consulting background to ensure alignment with IFRS 17/SII objectives within your project structure.</p>
                        <a href="https://www.linkedin.com/in/rinatkanatovich/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>

                    {/* === TEAM MEMBER 2: Alan Rymov === */}
                    <div className="team-member">
                        <img src={process.env.PUBLIC_URL + '/images/alan.jpeg'} alt="Alan Rymov" />
                        <h4>Alan Rymov</h4>
                        <p className="role">IFRS 17 & Solvency II Consultant / Core Model Developer</p>
                        <p className="role">IFRS 17 & Solvency II Consultant / Core Model Developer</p>
                        <p className="expertise">Fellow of the Society of Actuaries (FSA). Provides expert consulting on
                            standards and contributes to core actuarial model development & validation.</p>
                        <a href="https://linkedin.com/in/alan-rymov-08599b8" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>

                    {/* === TEAM MEMBER 3: Bolat Myrzakhmet === */}
                     <div className="team-member">
                         <img src={process.env.PUBLIC_URL + '/images/bolat.jpeg'} alt="Bolat Myrzakhmet" />
                         <h4>Bolat Myrzakhmet</h4>
                         <p className="role">Life Insurance IFRS 17 & Solvency II Consultant</p>
                         <p className="expertise">Specializes in applying IFRS 17/SII requirements to Life Insurance
                             products. Background in Actuarial Consulting.</p>
                         <a href="https://www.linkedin.com/in/bolat-myrzakhmet-7074367/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                     </div>

                     {/* === TEAM MEMBER 4: Aizhan Shukatayeva === */}
                    <div className="team-member">
                         <img src={process.env.PUBLIC_URL + '/images/aika.jpeg'} alt="Aizhan Shukatayeva" />
                        <h4>Aizhan Shukatayeva</h4>
                        <p className="role">General Insurance IFRS 17 & Solvency II Consultant</p>
                        <p className="expertise">Focuses on IFRS 17/SII implementation for General (Non-Life) lines.
                            Combines Actuarial Consulting with GAAP knowledge.</p>
                        <a href="https://www.linkedin.com/in/aizhan-shukatayeva-45b124251/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>

                     {/* === TEAM MEMBER 5: Vladimir Shevchenko === */}
                    <div className="team-member">
                         <img src={process.env.PUBLIC_URL + '/images/vladimir.jpeg'} alt="Vladimir Shevchenko" />
                        <h4>Vladimir Shevchenko</h4>
                        <p className="role">Core Model Developer</p>
                        <p className="expertise">Develops and implements core actuarial calculation engines using
                            Actuarial Data Science techniques.</p>
                        <a href="https://www.linkedin.com/in/vladimir-shevchenko-28180949/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>

                     {/* === TEAM MEMBER 6: Vitaliy Garshtya === */}
                     <div className="team-member">
                        <img src={process.env.PUBLIC_URL + '/images/vitaly.jpeg'} alt="Vitaliy Garshtya" />
                        <h4>Vitaliy Garshtya</h4>
                         <p className="role">Data Warehouse (DWH) Project Manager</p>
                         <p className="expertise">Manages DWH component build. Experienced in Big Data environments and
                             relevant Cyber Security practices.</p>
                         <a href="https://www.linkedin.com/in/vitaliy-garshtya-782296154/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>

                     {/* === TEAM MEMBER 7: Kuanysh Tokhmetov === */}
                     <div className="team-member">
                        <img src={process.env.PUBLIC_URL + '/images/kuanysh.jpeg'} alt="Kuanysh Tokhmetov" />
                        <h4>Kuanysh Tokhmetov</h4>
                         <p className="role">Data Engineer</p>
                         <p className="expertise">Designs and builds data pipelines, ETL processes. Proficient in SQL,
                             Python, Data Modeling, DWH concepts, DB tech (PostgreSQL, Greenplum), Big Data tools
                             (Spark, Kafka, Airflow).</p>
                         <a href="https://www.linkedin.com/in/kuanysh-tokhmetov-ba711695/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>

                     {/* === TEAM MEMBER 8: Vladislav Frants === */}
                    <div className="team-member">
                       <img src={process.env.PUBLIC_URL + '/images/vlad.jpeg'} alt="Vladislav Frants" />
                       <h4>Vladislav Frants</h4>
                        <p className="role">DevOps & Database Administrator (DBA)</p>
                        <p className="expertise">Manages IT infrastructure, deployment pipelines (DevOps), and Oracle
                            database administration (Multi-Certified OCP, OCE). Ensures stability and performance.</p>
                        <a href="https://www.linkedin.com/in/vladislav-frants-a1247489/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;