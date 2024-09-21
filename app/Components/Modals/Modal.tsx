"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";

interface Props {
  content: React.ReactNode;
}

function Modal({ content }: Props) {
  const { closeModal } = useGlobalState();

  const { theme } = useGlobalState();
  return (
    <ModalStyled theme={theme}>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-content">{content}</div>
    </ModalStyled>
  );
}

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    filter: blur(4px);
    z-index: 0;
  }

  .modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    width: 100%;
    height: auto;
    padding: 2rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.colorBg2};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    overflow-y: auto; /* Kaydırılabilir yapar */

    z-index: 1;

    @media screen and (max-width: 450px) {
      font-size: 90%;
    }
  }
`;

export default Modal;
