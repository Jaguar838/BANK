import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(62.93deg, #bf4af3 19.68%, #f2654f 89.55%);

  /* робимо фон на всю ширину */
  width: 100%;

  /* фіксуємо фон на одному місці */
  background-attachment: fixed;
`;
