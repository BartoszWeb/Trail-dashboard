import Paragraph from "../../atoms/Paragraph/Paragraph";
import ButtonDefault from "../../atoms/ButtonDefault/ButtonDefault";
import styled from "styled-components";


const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin: 2em auto;
`;

interface Props {
    refetch: () => void;
}

const Error = ({ refetch }: Props) => {
    return (
        <ErrorWrapper>
            <Paragraph margin={ "0 0 0.8em 0" }>I`am sorry but something went wrong, try again!</Paragraph>
            <ButtonDefault onClick={ refetch }>Try again</ButtonDefault>
        </ErrorWrapper>
    );
};

export default Error;