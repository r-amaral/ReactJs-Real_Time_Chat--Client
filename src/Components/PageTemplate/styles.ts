import styled from "styled-components";

export const PageTemplateWrapper = styled.div`
  background: #1a1924;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;

  padding: 32px 73px;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  flex-direction: column;
  gap: 30px;
  justify-content: space-between;

  overflow: hidden;
`;
