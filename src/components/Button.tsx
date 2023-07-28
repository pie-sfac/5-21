import { StyledButton } from './style';
interface Button {
    type?: string | undefined;
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
