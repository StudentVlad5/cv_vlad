import { SliderOfSertificate } from '../SliderOfSertificate/SladerOfSertificate';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';

import {
  ImgWrap,
  ItemWrap,
  ImgForTeam,
  ImgForTeamColor,
  JobItem,
  TitleItem,
  SocialsListLink,
  SocialsListItem,
  SocialsList,
  ButtonMovie,
} from './AppCV.styled';

import vlad from '../../images/person_photo/vlad_blackAndWhite.webp';
import vladColor from '../../images/person_photo/vlad_warm_color.webp';
import sprite from '../../images/sprite/sprite.svg';
import { Project } from 'components/Projects/Projects';
import { openModalWindow } from 'hooks/ModalWindow';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { useState } from 'react';

const AppCV = () => {
  Aos.init();
  const [isPlaying, setPlaying] = useState(false);

  const techSkills = [
    'Figma',
    'Next Js',
    'React',
    'Node',
    'JavaScript',
    'Express',
    'HTML',
    'CSS',
    'Parcel',
    'GitHub',
    'MongoDB',
    'Firebase',
  ];
  const softSkills = [
    'Communication Skills',
    'Teamwork',
    'Hard Working',
    'Problem Solving',
    'Project Management Skills',
    'Agile Software Development',
    'Business Operations',
  ];
  const details = [
    'Visa sponsorship is not required',
    'Residence permit',
    'Zwaag (Hoorn), Netherlands',
  ];
  const moreDetails = {
    Nationality: 'Ukrainian',
    License: ['B', 'C'],
    Languages: {
      Ukraine: 'native',
      Russian: 'native',
      English: 'upper intermediate',
    },
  };
  const moreDetailsKeys = Object.keys(moreDetails);

  const hendleOpenModalWindow = e => {
    setPlaying(true);
    openModalWindow(e);
  };

  return (
    <div className="maincontainer">
      <aside className="sidebar">
        <div className="linkOfCV">
          <Link
            to="/Vladyslav_Popov_-_Full_Stack_Web_Developer,_Frontend_Web_Developer.pdf"
            target="_blank"
            download
          >
            Upload CV
          </Link>
          <ButtonMovie type="button" onClick={e => hendleOpenModalWindow(e)}>
            <BiCameraMovie />
            About me
          </ButtonMovie>
        </div>
        <div className="photo">
          <ItemWrap data-aos="flip-up" data-aos-delay="150">
            <ImgWrap>
              <ImgForTeam src={vlad} alt="vlad" />
              <ImgForTeamColor src={vladColor} alt="vlad" />
            </ImgWrap>
            <TitleItem>Vlad Popov</TitleItem>
            <JobItem>Full-Stack Web Developer</JobItem>
            <JobItem>Frontend Web Developer</JobItem>
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
        {/* <!--details--> */}
        <div className="techskills section">
          <h3 className="sidebar_title">Details</h3>
          <ul className="techskillslist">
            {details &&
              details.map(item => (
                <li className="skills-item" key={item}>
                  <span className="skills-item-text">{item}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* <!--tech skills--> */}
        <div className="techskills section">
          <h3 className="sidebar_title">Tech Skills</h3>
          <ul className="techskillslist">
            {techSkills &&
              techSkills.map(item => (
                <li className="skills-item" key={item}>
                  <span className="skills-item-text">{item}</span>
                </li>
              ))}
          </ul>
        </div>
        {/* <!--soft skills--> */}
        <div className="softskills section">
          <h3 className="sidebar_title">Soft Skills</h3>
          <ul className="techskillslist">
            {softSkills &&
              softSkills.map(item => {
                return (
                  <li className="skills-item" key={item}>
                    <span className="skills-item-text">{item}</span>
                  </li>
                );
              })}
          </ul>
        </div>
        {/* <!--sertificates--> */}
        <div className="sliderOfSertification section">
          <h3 className="sidebar_title">Sertificates</h3>
          <SliderOfSertificate />
        </div>
      </aside>
      <div className="right_side">
        {/* <!--  about_me_section     --> */}
        <div className="aboutme">
          <h2 className="myjob">Full-Stack Web Developer</h2>
          <h2 className="myjob">Frontend Web Developer</h2>
          <h1 className="myname">Vlad Popov</h1>
          <div className="about_me_description">
            <p>
              I am a{' '}
              <b>
                <i>highly motivated individual</i>
              </b>{' '}
              with a strong passion for web development, and I believe my skills
              and experience align well with the requirements of my future
              projects. A few months ago, I relocated to the Netherlands. Since
              then, I{' '}
              <b>
                <i>have obtained work permission</i>
              </b>
              , found an apartment, and am now looking for a position where I
              can fully apply and further develop my skills in the IT field.{' '}
            </p>
            <p>
              {' '}
              This challenging period has only strengthened my determination to
              succeed and make a meaningful contribution in a professional
              setting. I bring hands-on experience from various projects,
              including startups and high-responsibility corporate initiatives.
              Throughout my career, I have consistently delivered projects of
              varying complexity, always meeting or exceeding expectations. My
              approach to development is user-focused, ensuring that web
              applications are not only functional but also intuitive and easy
              to navigate.
            </p>{' '}
            <p>
              {' '}
              Although my previous experience is based in Ukraine, I am fully
              prepared and eager{' '}
              <b>
                <i> to embrace new challenges </i>
              </b>{' '}
              and adapt to different environments. My technical expertise
              includes{' '}
              <b>
                <i>
                  {' '}
                  MERN stack, JavaScript, HTML, CSS, React, Next.js, Node.js,
                  Firebase, MongoDB and Express.
                </i>
              </b>{' '}
              I am passionate about staying up-to-date with the latest
              advancements in programming and am committed to continuous
              learning and professional growth. My enthusiasm for coding drives
              me to constantly improve, and I am confident that I can bring this
              dedication to my new role.{' '}
            </p>
            <p>
              {' '}
              When asked why I would like to work at a particular company, I
              sincerely believe that the most important factors for me are the
              relationships within the team and clear work processes, rather
              than the company&apos;s ranking or its industry. With the right
              mindset, projects can be interesting and exciting in any field:
              whether it&apos;s cryptocurrency, gaming, finance, healthcare,
              e-commerce, and so on. If an employer expects a candidate to
              consider only one company, that would mean the candidate has only
              applied to that one company, which is not the case.
            </p>
            <p>
              {' '}
              Currently,{' '}
              <i>
                <b>I am open to job offers</b>
              </i>
              . If you&apos;re interested, I would be happy to continue the
              conversation through any communication channel.
            </p>
          </div>
          {/* <!--more information --> */}
          <div className="moreDetail">
            {moreDetailsKeys &&
              moreDetailsKeys.map(item => {
                if (typeof moreDetails[item] === 'string') {
                  return (
                    <div key={item}>
                      <h4 className="style_education">{item}</h4>
                      <p className="style_period">
                        <span className="black_color_style_education">
                          {moreDetails[item]}
                        </span>
                      </p>
                    </div>
                  );
                } else if (Array.isArray(moreDetails[item])) {
                  return (
                    <div key={item}>
                      <h4 className="style_education">{item}</h4>
                      <p className="style_period">
                        {moreDetails[item].map(it => (
                          <span
                            key={it}
                            className="black_color_style_education"
                          >
                            {it + ' '}
                          </span>
                        ))}
                      </p>
                    </div>
                  );
                } else {
                  let keyItem = Object.keys(moreDetails[item]);
                  return (
                    <div key={item}>
                      <h4 className="style_education">{item}</h4>
                      {keyItem.map(it => (
                        <p className="style_period" key={it}>
                          <span className="black_color_style_education">
                            {it + ': ' + moreDetails[item][it]}
                          </span>
                        </p>
                      ))}
                    </div>
                  );
                }
              })}
          </div>
          {/* <!--  my projects     --> */}
          <div className="my_project" style={{ position: 'relative' }}>
            <h3 className="main-contact-title">Projects</h3>
            <Project />
          </div>
          {/* <!--  my work expierences     --> */}
          <div className="workexpiriens">
            <h3 className="main-contact-title">Work Experience</h3>
            {/* <!--  company_1--> */}
            <div className="company1 job">
              <h4 className="style_job">
                Full-Stack Web Developer{' '}
                <span className="text_style_orange">at Brand MAZE</span>
              </h4>
              <p className="text_style_about">
                {' '}
                IT company for website design and development
              </p>
              <p className="style_period">
                2022 - up to now{' '}
                <span className="black_color_style_period"> | </span> Ukraine
              </p>
              <p className="text_style_blue">
                <Link
                  to="https://brand-maze.com/"
                  alt="Brand Maze"
                  target="_blank"
                >
                  https://brand-maze-agency.vercel.app/
                </Link>
              </p>

              <ul className="description-of-duties">
                <li className="duty_item">
                  Development of web applications with modern, responsive user
                  interface, achieving satisfaction rating of 100%
                </li>
                <li className="duty_item">
                  Collaboration with other developers to ensure code consistency
                  and best practices. More than 60 completed projects (details
                  at the Portfolio links)
                </li>
              </ul>
            </div>
            {/* <!--  company_2--> */}
            <div className="company2 job">
              <h4 className="style_job">
                Project manager{' '}
                <span className="text_style_orange">at RozetkaUa LTD</span>
              </h4>
              <p className="text_style_about"> online marketplace</p>
              <p className="style_period">
                2018 - up to now{' '}
                <span className="black_color_style_period"> | </span> Ukraine
              </p>
              <p className="text_style_blue">
                <Link
                  to="https://rozetka.com.ua/ua/"
                  alt="Rozetka"
                  target="_blank"
                >
                  https://rozetka.com.ua/ua/
                </Link>
              </p>
              <ul className="description-of-duties">
                <li className="duty_item">
                  Agile methodology and tools usage to ensure successful product
                  launch, leading to 25% increase in sales
                </li>
                <li className="duty_item">
                  Implementation of payment methods for sellers on the
                  marketplace: payment by Visa & MasterCard, Apple & Google pay
                  and loans
                </li>
              </ul>
            </div>
            {/* <!--  company_3--> */}
            <div className="company3 job">
              <h4 className="style_job">
                Project manager{' '}
                <span className="text_style_orange"> at ALFA LLC</span>{' '}
              </h4>
              <p className="text_style_about">
                {' '}
                production of boats and polyester products
              </p>
              <p className="style_period">
                2017 - 2018{' '}
                <span className="black_color_style_period"> | </span> Ukraine
              </p>
              <ul className="description-of-duties">
                <li className="duty_item">
                  Team of sales representatives leading to exceed sales targets
                  by 100%, resulting in increased profits for the company
                </li>
                <li className="duty_item">
                  Establishment of a new sales channel that increased sales by
                  50% within the first year of implementation
                </li>
              </ul>
            </div>
            {/* <!--  company_4--> */}
            <div className="company4 job">
              <h4 className="style_job">
                Project Manager{' '}
                <span className="text_style_orange">at Foxtrot LTD</span>{' '}
              </h4>
              <p className="text_style_about">
                {' '}
                retail network of sales of electronics and household appliances
              </p>
              <p className="style_period">
                {' '}
                2004 - 2017{' '}
                <span className="black_color_style_period"> | </span> Ukraine
              </p>
              <p className="text_style_blue">
                <Link
                  to="https://www.foxtrot.com.ua/"
                  alt="Foxtrot"
                  target="_blank"
                >
                  https://www.foxtrot.com.ua/
                </Link>
              </p>
              <ul className="description-of-duties">
                <li className="duty_item">
                  Implementation of a complex software project with a budget of
                  $15 million/year, completing it on time and within budget
                </li>
                <li className="duty_item">
                  Development and implementation of new tools to increase the
                  company's sales
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- my education--> */}
          <div className="education">
            <h3 className="main-contact-title">Education</h3>
            {/* <!--  education_1--> */}
            <div className="education1 educate">
              <h4 className="style_education">
                Institute of Business Management
              </h4>
              <h5 className="style_specialty">
                {' '}
                Master of Business Administration (MBA), Finance, Accounting and
                Audit, Institute of Business Management, Ukraine
              </h5>
              <p className="style_period">
                1993 - 1998{' '}
                <span className="black_color_style_education"> | </span> Ukraine
              </p>
            </div>
            {/* <!--  education_2--> */}
            <div className="education2 educate">
              <h4 className="style_education">ICFM</h4>
              <h5 className="style_specialty">
                ICFM. International certificate of the Institute of Certified
                Financial Managers
              </h5>
              <p className="style_period">
                2011 - 2012{' '}
                <span className="black_color_style_education"> | </span> Ukraine
              </p>
            </div>
            {/* <!--  education_3--> */}
            <div className="education3 educate">
              <h4 className="style_education">GoIT</h4>
              <h5 className="style_specialty">
                diploma FS_12607, Full Stack Developer
              </h5>
              <p className="style_period">
                2022 - 2023{' '}
                <span className="black_color_style_education"> | </span> Ukraine
              </p>
            </div>
            {/* <!--  education_4--> */}
            <div className="education4 educate">
              <h4 className="style_education">Hillel</h4>
              <h5 className="style_specialty">diploma 61488832, Next JS</h5>
              <p className="style_period">
                2024 - 2024{' '}
                <span className="black_color_style_education"> | </span> Ukraine
              </p>
            </div>
          </div>
        </div>
      </div>

      <ModalWindow isPlaying={isPlaying} setPlaying={setPlaying} />
    </div>
  );
};

export default AppCV;
