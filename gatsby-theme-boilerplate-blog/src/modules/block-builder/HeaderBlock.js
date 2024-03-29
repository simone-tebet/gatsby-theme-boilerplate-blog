import React from "react";
import Layout from "gatsby-layout-builder";
import MainMenuData from "@Content/menus/main-menu.yaml";
import HeaderContainer from "../../containers/HeaderContainer";
const HeaderBlock = ({ logotipoSvg }) => {
  return (
    <>
      {/* <Layout
        type='HEADER'
        opt={{
          mainMenuStatus: MainMenuData.menu.status,
          logoSvg: logotipoSvg,
          bgOne: "#262A33",
          bgTwo: "transparent",
          classes: "header-block",
        }}
        mainMenu={MainMenuData.menu.items}
      /> */}
      <HeaderContainer
        opt={{
          mainMenuStatus: MainMenuData.menu.status,
          logoSvg: logotipoSvg,
          bgOne: "#262A33",
          bgTwo: "transparent",
          classes: "header-block",
        }}
        mainMenu={MainMenuData.menu.items}
      />
    </>
  );
};

export default HeaderBlock;
