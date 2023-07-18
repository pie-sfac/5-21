import { StyledButton } from './styles';
interface Button {
    type: string;
    text: string;
    onClick: () => void;
}

const Button = ({ text, type, onClick }: Button) => {
    return (
        <StyledButton className={type} onClick={onClick}>
            {text}
        </StyledButton>
    );
};

export default Button;
