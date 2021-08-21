import styled from "styled-components";

export const Content = styled.div`
  position: relative;

  display: flex;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;

    .content-details {
      top: 50%;
      left: 50%;
      opacity: 1;

      h3 {
        color: black;
      }
    }

    .overlay {
      opacity: 1;
    }
  }
`;

export const Overlay = styled.div`
  background: rgba(255, 182, 193, 0.3);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
`;

export const ContentDetails = styled.div`
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  top: 80%;

  h3 {
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.15em;
    margin-bottom: 0.5em;
    text-transform: uppercase;
  }

  p {
    color: #fff;
    font-size: 0.8em;
  }
`;
