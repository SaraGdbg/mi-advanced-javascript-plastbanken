import { DigiLayoutBlock, DigiButton } from "@digi/arbetsformedlingen-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../contexts/FilterContext";
import { createQueryString } from "../utils/createQueryString";

export const BackToResultsBar = () => {
    const navigate = useNavigate();
    const filters = useContext(FilterContext);
    const handleSubmit = () => {
        const queryString = createQueryString(filters);
        navigate(`/annonser/${queryString}`);
      };
return (
    <>
      <DigiLayoutBlock afMarginTop={true}>
        <DigiButton onAfOnClick={handleSubmit}>
          Tillbaka till sökning
        </DigiButton>
      </DigiLayoutBlock>
      </>
)};
