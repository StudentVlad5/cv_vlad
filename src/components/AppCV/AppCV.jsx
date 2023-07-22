import { SliderOfSertificate } from "../SliderOfSertificate/SladerOfSertificate"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";

import {ImgWrap, ItemWrap, ImgForTeam, ImgForTeamColor, JobItem, TitleItem, SocialsListLink, SocialsListItem, SocialsList, ButtonMovie} from "./AppCV.styled";

import vlad from '../../images/person_photo/vlad_blackAndWhite.webp';
import vladColor from '../../images/person_photo/vlad_warm_color.webp';
import sprite from '../../images/sprite/sprite.svg';
import { Project } from "components/Projects/Projects";
import { openModalWindow } from "hooks/ModalWindow";
import { ModalWindow } from '../ModalWindow/ModalWindow'
import { useState } from "react";

const AppCV = () => {
    Aos.init();
    const [isPlaying, setPlaying] = useState(false);    

    const hendleOpenModalWindow = (e) => {
      setPlaying(true);
      openModalWindow(e);
    }

    return (
   <div className="maincontainer">
        <aside className="sidebar">
          <div className="linkOfCV">
            <Link to="/Rezume_ukr_Vladyslav Popov.doc" target="_blank" download>CV UKR</Link>
            <Link to="/Resume_eng_Vladyslav_Popov.doc" target="_blank" download>CV ENG</Link>
            <ButtonMovie  type="button" onClick={(e)=>hendleOpenModalWindow(e)}>
              <BiCameraMovie/>
            </ButtonMovie>
          </div>
          <div className="photo">
            <ItemWrap data-aos="flip-up" data-aos-delay="150">
          <ImgWrap>
            <ImgForTeam src={vlad} alt="vlad" />
            <ImgForTeamColor src={vladColor} alt="vlad" />
          </ImgWrap>
          <TitleItem>Vlad Popov</TitleItem>
          <JobItem>Full-Stack Developer</JobItem>
          <JobItem>Project Manager</JobItem>
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
          </div>
{/* <!--tech skills--> */}
                <div className="techskills section">
                    <h3 className="sidebar_title">Tech Skills</h3>
                    <ul className="techskillslist">
                        <li className="skills-item"><span className="skills-item-text">HTML5</span></li>
                        <li className="skills-item"><span className="skills-item-text">CSS3</span></li>
                        <li className="skills-item"><span className="skills-item-text">GIT</span></li>
                        <li className="skills-item"><span className="skills-item-text">JAVASCRIPT</span></li>
                        <li className="skills-item"><span className="skills-item-text">REACT</span></li>
                        <li className="skills-item"><span className="skills-item-text">NODE JS</span></li>
                        <li className="skills-item"><span className="skills-item-text">REACT-NATIVE</span></li>
                        <li className="skills-item"><span className="skills-item-text">TYPESCRIPT</span></li>
                    </ul>
                </div>
{/* <!--soft skills--> */}
                <div className="softskills section">
                    <h3 className="sidebar_title">Soft Skills</h3>
                    <ul className="techskillslist">
                        <li className="skills-item"><span className="skills-item-text">Scrum</span></li>
                        <li className="skills-item"><span className="skills-item-text">Agile</span></li>
                        <li className="skills-item"><span className="skills-item-text">Communication</span></li>
                        <li className="skills-item"><span className="skills-item-text">Teamwork</span></li>
                        <li className="skills-item"><span className="skills-item-text">Ability to concede deadlines</span></li>
                        <li className="skills-item"><span className="skills-item-text">Time management</span></li>
                        <li className="skills-item"><span className="skills-item-text">Stress management</span></li>
                    </ul>
                </div>
{/* <!--sertificates--> */}
                <div className="sliderOfSertification section">
                <h3 className="sidebar_title">Sertificates</h3>
                    <SliderOfSertificate/>
                </div>
        </aside>
        <div className="right_side">
{/* <!--  about_me_section     --> */}
            <div className="aboutme">
                <h2 className="myjob">Full-Stack-Developer</h2>
                <h2 className="myjob">Project Manager</h2>
                <h1 className="myname">Popov Vlad</h1>
                    <p className="about_me_description">Project-owner, usiness analyst.Financial management. Organization of ccounting and reporting, internal financial control. Development of business plans, audit, analysis of results. Operational component of the department, control of team schedule.</p>
{/* <!--  my projects     --> */}
            <div className="my_project" style={{position:"relative"}}>
                    <h3 className="main-contact-title">Projects</h3>
                    <Project/>
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
                            <li className="duty_item">Implementing own projects</li>
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
  {/* <!--  company_4--> */}
            <div className="company4 job">
                    <h4 className="style_job">Manager  <span className="text_style_orange">Foxtrot LTD</span> </h4>
                    <p className="style_period"> april 2004 -  september 2015   <span className="black_color_style_period"> | </span>  Ukraine</p>
                        <ul className="description-of-duties">
                            <li className="duty_item">Development of credit sales</li>
                            <li className="duty_item">Development of credit programs</li>
                            <li className="duty_item">Simplifying the process of buying on credit</li>
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
        <ModalWindow isPlaying={isPlaying} setPlaying={setPlaying}/>
    </div>
)}

export default AppCV