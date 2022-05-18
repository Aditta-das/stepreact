import React from 'react';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/resume.css';

class Resume extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="container">
                    <section id="main">
                        <header id="title">
                            <h1>Aditta Das Nishad</h1>
                            <span className="subtitle">North Kashimpur, Punchgachia, Feni, Bangladesh</span><br />
                            <span className="subtitle"><b>Phone: +8801824967296</b> || <b>Email:</b> <a className="mailLink" href="mailto:aditta.das.nishad@gmail.com"><b>aditta.das.nishad@gmail.com</b></a></span>
                        </header>
                        <section className="main-block">
                            <h2>
                                <i className="fa fa-suitcase"></i> Experiences
                            </h2>
                            <section className="blocks">
                                <div className="date">
                                    <span>Nov, 2020</span><span>Jan, 2021</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>ML Engineer (Intern)</h3>
                                        <span className="place">Pioneer Alpha</span>
                                        <span className="location">(remote)</span>
                                    </header>
                                    <div>
                                        <ul>
                                            <li>Worked there as an intern in computer vision section. Worked on licence plate detection.</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section className="blocks">
                                <div className="date">
                                    <span>2014</span><span>2015</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>Creative Developer</h3>
                                        <span className="place">SEBPO</span>
                                        <span className="location">Dhaka, Bangladesh (Remote)</span>
                                    </header>
                                    <div>
                                        <ul>
                                            <li>As a creative developer worked there with JavaScript, JQuery and other tools</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section className="main-block">
                            <h2>
                                <i className="fa fa-folder-open"></i> Projects
                            </h2>
                            <section className="blocks">
                                <div className="date">

                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3><b>Live Tweet Sentiment Analysis Using API</b></h3>
                                    </header>
                                    <div>
                                        <ul>
                                            <li>Twitter live sentiment analysis using Twitter API.. For
                                                visualization and live stream used plotly. For sentiment
                                                analysis used the inbuilt NLP package VaderSentiment.</li>
                                            <li>Keywords: Plotly, TwitterAPI, VaderSentiment</li>
                                            <li><a href="https://github.com/Aditta-das/SentimentWithDash/tree/main/TwitterSentiment">github</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section className="blocks">
                                <div className="date">

                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3><b>Driver Drowsiness Classification</b></h3>
                                    </header>
                                    <div>
                                        <ul>
                                            <li>Face Detection and alert system for the driver. Instant
                                                Face classification system. Classify every frame when a
                                                face is detected.
                                            </li>
                                            <li>Keywords: Classification, Haarcascade, Alert System,
                                                Keras, OpenCV, python
                                            </li>
                                            <li>
                                                <a href="https://github.com/Aditta-das/Drowsy-Driver-">github</a>
                                                <br />
                                                <a href="https://www.kaggle.com/adinishad/driver-drowsiness-using-keras">kaggle</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section className="blocks">
                                <div className="date">

                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3><b>Urban Sound Classification</b></h3>

                                    </header>
                                    <div>
                                        <ul>
                                            <li>Deal with a lot of sounds. Classify with the best accuracy.
                                                The more Challenging part was feature extraction.</li>
                                            <li>Keywords: Spectrogram, Mel-spectrogram, torchaudio,
                                                PyTorch</li>
                                            <li><a href="https://www.kaggle.com/adinishad/urbansound-classification-with-pytorch-and-fun">kaggle</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section className="blocks">
                                <div className="date">

                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3><b>Bangla News Classification</b></h3>

                                    </header>
                                    <div>
                                        <ul>
                                            <li>Bangla News classification using PyTorch and react, drf</li>
                                            <li>Keywords: Classification, PyTorch, react, and Django rest
                                                framework</li>
                                            <li><a href="https://github.com/Aditta-das/Bangla-News-Classification">github</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section className="main-block concise">
                            <h2>
                                <i className="fa fa-graduation-cap"></i> Education
                            </h2>
                            <section className="blocks">
                                <div className="date">
                                    <span>2019</span><span>2020</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>M.Sc. - Applied Mathematics</h3>
                                        <h3>CGPA - 3.53 / 4.00 </h3>
                                        <h3>Result Publish 19.04.2022</h3>
                                        <span className="place">Noakhali Science and Technology University</span>
                                        <span className="location">Noakhali, Bangladesh</span>
                                    </header>
                                </div>
                            </section>
                            <section className="blocks">
                                <div className="date">
                                    <span>2015</span><span>Nov, 2019</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>B.Sc. - Applied Mathematics</h3>
                                        <h3>CGPA - 3.29 / 4.00 </h3>
                                        <span className="place">Noakhali Science and Technology University</span>
                                        <span className="location">Noakhali, Bangladesh</span>
                                    </header>
                                </div>
                            </section>
                            <section className="blocks">
                                <div className="date">
                                    <span>2013</span><span>2015</span>
                                </div>
                                <div className="decorator">
                                </div>
                                <div className="details">
                                    <header>
                                        <h3>H.S.C - Science</h3>
                                        <h3>GPA - 5.00 / 5.00 </h3>
                                        <span className="place">Saint Joseph Higher Secondary School</span>
                                        <span className="location">Dhaka, Bangladesh</span>
                                    </header>
                                </div>
                            </section>
                        </section>
                    </section>
                </div>
            </>
        );
    }
}

export default Resume;