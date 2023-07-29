import * as S from './style';
// img
import infoTooltip from '../../assets/icon-template-info.svg';
import templateClosedToggleIcon from '../../assets/icon-template-toggle-arrow.svg';
import upIcon from '../../assets/icon-order-up.svg';
import downIcon from '../../assets/icon-order-down.svg';

const TextTemplate = () => {
    return (
        <S.TemplateWrapper>
            <S.TemplateHeader>
                <S.TemplateHeaderTitle>
                    <S.Title>01 텍스트</S.Title>
                    <S.CategoryLabel>기본 문항</S.CategoryLabel>
                    <S.infoTooltip src={infoTooltip} />
                </S.TemplateHeaderTitle>
                <S.ToggleArrowBtn>
                    <S.ToggleArrowIcon src={templateClosedToggleIcon} />
                </S.ToggleArrowBtn>
            </S.TemplateHeader>

            <S.TemplateOption>
                <S.OptionWrapper>
                    <S.InputWrapper>
                        <S.RadioInput type='radio' />
                        <S.RadioLabel>단답형</S.RadioLabel>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.RadioInput type='radio' />
                        <S.RadioLabel>장문형</S.RadioLabel>
                    </S.InputWrapper>
                </S.OptionWrapper>
                <S.RequiredToggle>
                    <S.ToggleLabel>필수</S.ToggleLabel>
                    <S.Toggle type='checkbox'></S.Toggle>
                </S.RequiredToggle>
            </S.TemplateOption>

            <S.TemplateContent>
                <S.InputWrapper>
                    <S.TemplateTitleLabel>문항 제목</S.TemplateTitleLabel>
                    <S.TemplateTitleInput type='text' placeholder='문항 제목을 적어주세요. (최대 50자)' />
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.TemplateTitleLabel>문항 설명</S.TemplateTitleLabel>
                    <S.TemplateDescInput placeholder='문항 설명을 적어주세요. (생략 가능)' />
                </S.InputWrapper>
            </S.TemplateContent>

            <S.TemplateFooter>
                <S.OrderBtnWrapper>
                    <S.OrderBtn>
                        <S.UpIcon src={upIcon} />
                    </S.OrderBtn>
                    <S.OrderBtn>
                        <S.DownIcon src={downIcon} />
                    </S.OrderBtn>
                </S.OrderBtnWrapper>
                <S.deleteBtn>삭제</S.deleteBtn>
            </S.TemplateFooter>
        </S.TemplateWrapper>
    );
};

export default TextTemplate;
