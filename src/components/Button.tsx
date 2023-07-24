import { StyledButton } from './style';
interface Button {
    type?: string;
    text: string;
    onClick: () => void;
}

const Button = ({ text, type, onClick }: Button) => {
    // const btnType = ['secondary', 'delete'].includes(type) ? type : '';

    return (
        <StyledButton className={type} onClick={onClick}>
            {text}
        </StyledButton>
    );
};

export default Button;
