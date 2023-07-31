import * as S from './style';
// img
import infoTooltip from '../../assets/icon-template-info.svg';
import upIcon from '../../assets/icon-order-up.svg';
import downIcon from '../../assets/icon-order-down.svg';
import closeIcon from '../../assets/icon-close-btn.svg';

const TextTemplate = () => {
    return (
        <S.TemplateWrapper>
            <S.TemplateHeader>
                <S.TemplateHeaderTitle>
                    <S.Title>01 텍스트</S.Title>
                    <S.CategoryLabel>기본 문항</S.CategoryLabel>
                    <S.infoTooltip src={infoTooltip} />
                </S.TemplateHeaderTitle>
                <S.CloseBtn>
                    <S.CloseImg src={closeIcon} />
                </S.CloseBtn>
            </S.TemplateHeader>

            <S.TemplateOption>
                <S.OptionWrapper>
                    <S.RadioLabel>
                        <S.RadioInput type='radio' name='optionRadio' />
                        <S.RadioName>단답형</S.RadioName>
                    </S.RadioLabel>
                    <S.RadioLabel>
                        <S.RadioInput type='radio' name='optionRadio' />
                        <S.RadioName>장문형</S.RadioName>
                    </S.RadioLabel>
                </S.OptionWrapper>
                <S.SwitchLabel>
                    <S.SwitchName>필수</S.SwitchName>
                    <S.Switch role='switch' type='checkbox'></S.Switch>
                </S.SwitchLabel>
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
            </S.TemplateFooter>
        </S.TemplateWrapper>
    );
};

export default TextTemplate;
