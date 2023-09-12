import styled from "styled-components";

type Props = {
    children: string;
    disabled?: boolean;
    onClick: () => void;
};


export const Button: React.FC<Props> = ({children, disabled, onClick}) => {
    return <ButtonWallper type ="button" disabled={disabled} onClick={() => onClick()}>{children}</ButtonWallper>;
}; 

const ButtonWallper = styled.button`
   all: unset;
   cursor: pointer;
   border: 1 px solid  white;
   border-radius: 4px;
   background: blue;
   color: white;
   padding: 5px 10px;


&:disabled {
    cursor: none;
    opasity: 0.67;
    color: gray;
}
`;