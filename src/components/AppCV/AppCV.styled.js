import styled from "styled-components";

const ImgForTeamColor = styled.img`
  display: block;
  position: relative;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  height: 250px;
  @media screen and (min-width: 490px) {
    width: 250px;
    height: 330px;
  }
`;
const ItemWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-family: "Inter", sans-serif;
  font-style: normal;
  width: 100%;
  overflow: hidden;
  margin-top: 30px;
`;

const ImgWrap = styled.div`
  display: block;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  width: 200px;
  height: 250px;
  @media screen and (min-width: 490px) {
    width: 250px;
    height: 357px;
  }
  &:hover ${ImgForTeamColor} {
    -webkit-transform: translateY(-100%);
    transform: translateY(-101.5%);
    opacity: 1;
  }
`;

const ImgForTeam = styled.img`
  width: 100%;
  height: 250px;
  @media screen and (min-width: 490px) {
    width: 250px;
    height: 330px;
  }
`;
const TitleItem = styled.h4`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 20px;
  letter-spacing: 4%;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  /* color: ${(props) => props.theme.black}; */

  margin-top: 15px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const JobItem = styled.h5`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 4%;
  font-weight: 500;
  color: grey;
  /* color: ${(props) => props.theme.grey}; */
  margin: 10px;
`;
const SocialsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const SocialsListItem = styled.li`
  cursor: pointer;
  padding: 2px;
  list-style: none;
  /* color: ${(props) => props.theme.black}; */
  & > * {
    fill: white;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
  & > *:hover,
  & > *:focus {
    fill: orangered;
    /* fill: ${(props) => props.theme.accentRed}; */
  }

  & > * {
    fill: black;
    /* fill: ${(props) => props.theme.black}; */
  }
`;
const SocialsListLink = styled.a`
  cursor: pointer;
  padding: 2px;
  color: black;
  /* color: ${(props) => props.theme.black}; */

  & > *:hover,
  & > *:focus {
    fill: orangered;
    /* fill: ${(props) => props.theme.accentRed}; */
  }

  & svg {
    fill: white;
  }
`;

export {
  ImgWrap,
  ItemWrap,
  ImgForTeam,
  ImgForTeamColor,
  JobItem,
  TitleItem,
  SocialsListLink,
  SocialsListItem,
  SocialsList,
};
