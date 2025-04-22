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
                    </div>

                    {/* === TEAM MEMBER 2: Alan Rymov === */}
                    <div className="team-member">
                        <img src={process.env.PUBLIC_URL + '/images/alan.jpeg'} alt="Alan Rymov" />
                        <h4>Alan Rymov</h4>
                        <p className="role">IFRS 17 & Solvency II Consultant / Core Model Developer</p>
                        {/* ... rest of Alan's info */}
                        <a href="https://linkedin.com/in/alan-rymov-08599b8" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>

                    {/* === TEAM MEMBER 3: Bolat Myrzakhmet === */}
                     <div className="team-member">
                         <img src={process.env.PUBLIC_URL + '/images/bolat.jpeg'} alt="Bolat Myrzakhmet" />
                         <h4>Bolat Myrzakhmet</h4>
                        {/* ... rest of Bolat's info */}
                         <a href="https://www.linkedin.com/in/bolat-myrzakhmet-7074367/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                     </div>

                     {/* === TEAM MEMBER 4: Aizhan Shukatayeva === */}
                    <div className="team-member">
                         <img src={process.env.PUBLIC_URL + '/images/aika.jpeg'} alt="Aizhan Shukatayeva" />
                        <h4>Aizhan Shukatayeva</h4>
                         {/* ... rest of Aizhan's info */}
                         <a href="https://www.linkedin.com/in/aizhan-shukatayeva-45b124251/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>

                     {/* === TEAM MEMBER 5: Vladimir Shevchenko === */}
                    <div className="team-member">
                         <img src={process.env.PUBLIC_URL + '/images/vladimir.jpeg'} alt="Vladimir Shevchenko" />
                        <h4>Vladimir Shevchenko</h4>
                         {/* ... rest of Vladimir's info */}
                         <a href="https://www.linkedin.com/in/vladimir-shevchenko-28180949/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>

                     {/* === TEAM MEMBER 6: Vitaliy Garshtya === */}
                     <div className="team-member">
                        <img src={process.env.PUBLIC_URL + '/images/vitaly.jpeg'} alt="Vitaliy Garshtya" />
                        <h4>Vitaliy Garshtya</h4>
                        {/* ... rest of Vitaliy's info */}
                         <a href="https://www.linkedin.com/in/vitaliy-garshtya-782296154/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>

                     {/* === TEAM MEMBER 7: Kuanysh Tokhmetov === */}
                     <div className="team-member">
                        <img src={process.env.PUBLIC_URL + '/images/kuanysh.jpeg'} alt="Kuanysh Tokhmetov" />
                        <h4>Kuanysh Tokhmetov</h4>
                        {/* ... rest of Kuanysh's info */}
                        <a href="https://www.linkedin.com/in/kuanysh-tokhmetov-ba711695/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>

                     {/* === TEAM MEMBER 8: Vladislav Frants === */}
                    <div className="team-member">
                       <img src={process.env.PUBLIC_URL + '/images/vlad.jpeg'} alt="Vladislav Frants" />
                       <h4>Vladislav Frants</h4>
                        {/* ... rest of Vladislav's info */}
                        <a href="https://www.linkedin.com/in/vladislav-frants-a1247489/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn Profile</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;