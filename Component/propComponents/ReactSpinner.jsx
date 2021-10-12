import { ScaleLoader } from "react-spinners";

export default function ReactSpinner(props) {
  const override = `
        display: flex;
        align-items: center;
        justify-content: center;    
        border-color: blue;
    `;
  return (
    <>
      <ScaleLoader css={override} size={150} color={"#0056a2"} loading="true" />
    </>
  );
}
