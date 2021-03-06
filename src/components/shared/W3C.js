import React, { Component } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import IconCodePen from "../../svgComponents/IconCodePen";
import IconGithub from "../../svgComponents/IconGithub";
import IconReact from "../../svgComponents/IconReact";
import IconCloud from "../../svgComponents/IconCloud";
import IconTravis from "../../svgComponents/IconTravis";
import CSS3 from "../../svgComponents/CSS3";

const Wrapper = styled.div`
  display: flex;
  a,
  a:visited {
    color: #444;
  }
  a:hover {
    color: #fff;
  }
  a:active {
    color: #000;
    background-color: transparent;
  }
  a:hover:before {
    background: transparent;
  }
`;

const LogoContainer = styled.div`
  width: 64px;
  height: 64px;
  background: #000;
  margin-top: 16px;
`;

const StyledComponentsIcon = styled.div`
  width: 56px;
  height: 25px;
  background: url("assets/img/styled-components-icon.png") no-repeat center;
`;

class W3C extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <div>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener"
            alt="React.js"
            aria-label="React.js"
          >
            <LogoContainer data-tip="React.js" style={{ marginTop: "16px" }}>
              <IconReact />
              <ReactTooltip />
            </LogoContainer>
          </a>

          <a
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noopener"
            style={{ color: "#fff" }}
            alt="Amazon Web Services"
            aria-label="Amazon Webservices"
          >
            <LogoContainer
              data-tip="Amazon Web Services"
              style={{ writingMode: "horizontal-tb" }}
            >
              <IconCloud />
              <ReactTooltip />
              <span
                style={{
                  display: "inline-block",
                  width: "40px",
                  position: "absolute",
                  top: "22px",
                  left: "14px",
                  fontSize: "16px",
                  color: "#fff",
                }}
              >
                AWS
              </span>
            </LogoContainer>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            alt="Github"
            aria-label="Github"
          >
            <LogoContainer data-tip="Github">
              <IconGithub />
              <ReactTooltip />
            </LogoContainer>
          </a>

          <a
            href="https://codepen.io/"
            target="_blank"
            rel="noopener"
            alt="CodePen"
            aria-label="CodePen"
          >
            <LogoContainer
              data-tip="CodePen"
              style={{ paddingTop: "8px", paddingLeft: "8px" }}
            >
              <IconCodePen />
              <ReactTooltip />
            </LogoContainer>
          </a>

          <a
            data-tip="styled-components"
            href="https://www.styled-components.com/"
            target="_blank"
            rel="noopener"
            alt="styled-components"
            aria-label="Styled Components"
          >
            <LogoContainer style={{ paddingTop: "12px" }}>
              <StyledComponentsIcon />
              <ReactTooltip />
            </LogoContainer>
          </a>

          <a
            href="https://travis-ci.org/"
            target="_blank"
            rel="noopener"
            alt="Travis CI"
            aria-label="TravisCI"
          >
            <LogoContainer
              data-tip="TravisCI"
              style={{ paddingTop: "8px", paddingLeft: "8px" }}
            >
              <IconTravis />
              <ReactTooltip />
            </LogoContainer>
          </a>

          <LogoContainer
            data-tip="CSS3"
            style={{
              paddingTop: "4px",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "2px",
                left: "-7px",
                overflow: "visible",
              }}
            >
              <CSS3 />
            </span>
            <ReactTooltip />
          </LogoContainer>
        </div>
        <p className="vertical-text">Used technologies</p>
      </Wrapper>
    );
  }
}

export default W3C;
