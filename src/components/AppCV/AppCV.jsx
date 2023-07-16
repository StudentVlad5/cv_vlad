import { SliderOfSertificate } from "../SliderOfSertificate/SladerOfSertificate"
import Aos from 'aos';
import 'aos/dist/aos.css';

import {ImgWrap, ItemWrap, ImgForTeam, ImgForTeamColor, JobItem, TitleItem, SocialsListLink, SocialsListItem, SocialsList} from "./AppCV.styled";

import vlad from '../../images/person_photo/vlad_blackAndWhite.jpg';
import vladColor from '../../images/person_photo/vlad_warm_color.jpg';
import sprite from '../../images/sprite/sprite.svg';

const AppCV = () => {
    Aos.init();
    return (
   <div className="maincontainer">
        <aside className="sidebar">
            <div className="photo">
            <ItemWrap data-aos="flip-up" data-aos-delay="150">
          <ImgWrap>
            <ImgForTeam src={vlad} alt="vlad" />
            <ImgForTeamColor src={vladColor} alt="vlad" />
          </ImgWrap>
          <TitleItem>Vlad Popov</TitleItem>
          <JobItem>Full-Stack Developer</JobItem>
          <SocialsList>
            <SocialsListItem>
              <SocialsListLink
                href="https://github.com/StudentVlad5"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#github'}></use>
                </svg>
              </SocialsListLink>
            </SocialsListItem>
            <SocialsListItem>
              <SocialsListLink
                href="https://www.linkedin.com/in/vladyslav-popov-a491232a/"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#linkedin'}></use>
                </svg>
              </SocialsListLink>
            </SocialsListItem>
            <SocialsListItem>
              <SocialsListLink
                href="https://t.me/Vinforam"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="20" height="20">
                  <use href={sprite + '#telegram'}></use>
                </svg>
              </SocialsListLink>
            </SocialsListItem>
            <SocialsListItem>
              <SocialsListLink href="mailto:vlad_np@ukr.net">
                <svg width="20" height="20">
                  <use href={sprite + '#envelop'}></use>
                </svg>
              </SocialsListLink>
            </SocialsListItem>
          </SocialsList>
        </ItemWrap>
                {/* <img id="photo" src="" alt="Vlad"/> */}
            </div>
{/* <!--my contacts--> */}
                <div className="contacts section">
                    <h3 className="sidebar_title">Contacts</h3>
                        <div className="phone"><span className="sidebarletter">C:</span>
                            <a className="sidebarcontact" href="tel:+380671403070">+38 06 71 40 30 70</a>
                        </div>
                        <div className="mail"><span className="sidebarletter">E:</span>
                            <a className="sidebarcontact"href="mailto:vlad_np@ukr.net">vlad_np@ukr.net</a>
                        </div>
                </div>
{/* <!--tech skills--> */}
                <div className="techskills section">
                    <h3 className="sidebar_title">Tech Skills</h3>
                    <ul className="techskillslist">
                        <li className="skills-item"><span className="skills-item-text">HTML5</span></li>
                        <li className="skills-item"><span className="skills-item-text">CSS3</span></li>
                        <li className="skills-item"><span className="skills-item-text">GIT</span></li>
                        <li className="skills-item"><span className="skills-item-text">JavaScript</span></li>
                        <li className="skills-item"><span className="skills-item-text">Photoshop</span></li>
                    </ul>
                </div>
{/* <!--soft skills--> */}
                <div className="softskills section">
                    <h3 className="sidebar_title">Soft Skills</h3>
                    <ul className="techskillslist">
                        <li className="skills-item"><span className="skills-item-text">Scrum</span></li>
                        <li className="skills-item"><span className="skills-item-text">Agile</span></li>
                        <li className="skills-item"><span className="skills-item-text">Critical thinking</span></li>
                        <li className="skills-item"><span className="skills-item-text">Teamwork</span></li>
                        <li className="skills-item"><span className="skills-item-text">Ability to concede deadlines</span></li>
                    </ul>
                </div>
                <div className="sliderOfSertification section">
                    <SliderOfSertificate/>
                </div>
        </aside>
        <div className="right_side">
{/* <!--  about_me_section     --> */}
            <div className="aboutme">
                <h2 className="myjob">Front-End-Developer</h2>
                <h1 className="myname">Popov Vlad</h1>
                    <p className="about_me_description">Project-owner, usiness analyst.Financial management. Organization of ccounting and reporting, internal financial control. Development of business plans, audit, analysis of results. Operational component of the department, personnel control.</p>
{/* <!--  my projects     --> */}
            <div className="my_project">
                    <h3 className="main-contact-title">Projects</h3>
                        <ol className="my_project_list">
                            <li className="my_project_item"><span className="my_project_text"><a href="https://hellenglish.goit.global">https://hellenglish.goit.global/</a><span className="letter_space">
                                .............</span><span><span className="black_color_style">[ </span>HTML5, CSS3<span className="black_color_style"> ]</span></span></span>
                            </li>
                            <li className="my_project_item"><span className="my_project_text"><a href="https://cryptohub.goit.global">https://cryptohub.goit.global/</a><span className="letter_space">
                                ..............</span><span className="black_color_style">[ </span> JavaScript<span className="black_color_style"> ]</span></span>
                            </li>
                            <li className="my_project_item"><span className="my_project_text"><a href="https://kidslike.goit.global">https://kidslike.goit.global/</a><span className="letter_space">
                                 .................</span><span><span className="black_color_style">[ </span> React.js, Node.js<span className="black_color_style"> ]</span></span>
                            </span>
                                </li>
                        </ol>
            </div>
{/* <!--  my work expierences     --> */}
            <div className="workexpiriens">
                <h3 className="main-contact-title">Work Experience</h3>
{/* <!--  company_1--> */}
                <div className="company1 job">
                    <h4 className="style_job">Front-End Developer <span className="text_style_orange">Freelance</span></h4>
                    <p className="style_period">January 2022 - up to now <span className="black_color_style_period">   | </span>  Ukraine</p>
                        <ul className="description-of-duties">
                            <li className="duty_item">Help in social projects</li>
                            <li className="duty_item">Improve the level of programming</li>
                            <li className="duty_item">Implementing own project</li>
                        </ul>
                </div>
{/* <!--  company_2--> */}
                <div className="company2 job">
                    <h4 className="style_job">Manager <span className="text_style_orange">RozetkaUa LTD</span></h4>
                    <p className="style_period">May 2016 - up to now   <span className="black_color_style_period"> | </span>   Ukraine</p>
                        <ul className="description-of-duties">
                            <li className="duty_item">Development of a strategic plan</li>
                            <li className="duty_item">Projects of increase sales</li>
                            <li className="duty_item">Communication with project customers</li>
                            <li className="duty_item">Analysis of results</li>
                        </ul>
                </div>
{/* <!--  company_3--> */}
                <div className="company3 job">
                    <h4 className="style_job">Manager  <span className="text_style_orange">UMS Polyester LTD</span> </h4>
                    <p className="style_period">September 2015 - May 2016   <span className="black_color_style_period"> | </span>  Ukraine</p>
                        <ul className="description-of-duties">
                            <li className="duty_item">Searching for new partners</li>
                            <li className="duty_item">Organization of the operational process of ordering</li>
                            <li className="duty_item">Coordination of cooperation</li>
                        </ul>
                </div>
            </div>
{/* <!-- my education--> */}
                <div className="education">
                    <h3 className="main-contact-title">Education</h3>
{/* <!--  education_1--> */}
                    <div className="education1 educate">
                        <h4 className="style_education">Institute of Business Management</h4>
                        <h5 className="style_specialty">Audit, economics, accounting</h5>
                        <p className="style_period">September 1993 - June 1998   <span className="black_color_style_education"> | </span>   Ukraine</p>
                    </div>
{/* <!--  education_2--> */}
                    <div className="education2 educate">
                        <h4 className="style_education">ICFM</h4>
                        <h5 className="style_specialty">ICFM. International certificate of the Institute of Certified Financial Managers</h5>
                        <p className="style_period">March 2011 - September 2012   <span className="black_color_style_education"> | </span> Ukraine</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

export default AppCV