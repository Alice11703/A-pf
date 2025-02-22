import styled from "styled-components";

export const ToggleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Toggle = styled.div`
  transition: all 0.3s ease;
  position: relative;
  width: 34px;
  height: 18px;
  border-radius: 16px;
  outline: none;
  padding: 0 2px;
  background-color: ${props => props.isToggleOn ? 'var(--toggle-active)' : 'var(--toggle-inactive)'};
  cursor: pointer;
`;

export const ToggleButton = styled.div`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-top: 2px;
  background-color: var(--toggle-button);
  transform: ${props => props.isToggleOn ? 'translateX(20px)' : 'translateX(0px)'};
  box-shadow: 0 1px 3px var(--shadow-color);
`;