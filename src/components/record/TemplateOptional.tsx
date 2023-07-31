import * as S from './style';
// img
import infoTooltip from '../../assets/icon-template-info.svg';
import upIcon from '../../assets/icon-order-up.svg';
import downIcon from '../../assets/icon-order-down.svg';
import closeIcon from '../../assets/icon-close-btn.svg';

const OptionalTemplate = () => {
    return (
        <S.TemplateWrapper>
            <S.TemplateHeader>
                <S.TemplateHeaderTitle>
                    <S.Title>03 선택형 문항</S.Title>
                    <S.CategoryLabel>기본 문항</S.CategoryLabel>
                    <S.infoTooltip src={infoTooltip} />
                </S.TemplateHeaderTitle>
                <S.CloseBtn>
                    <S.CloseImg src={closeIcon} />
                </S.CloseBtn>
            </S.TemplateHeader>

            <S.TemplateOption>
                <S.OptionWrapper></S.OptionWrapper>
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
                <S.InputWrapper>
                    <S.TemplateTitleWrapper>
                        <S.TemplateTitleLabel>보기</S.TemplateTitleLabel>
                        <S.AddBtnWrapper>
                            <S.AddViewBtn>보기 추가하기</S.AddViewBtn>
                            <S.AddOtherBtn>기타 추가하기</S.AddOtherBtn>
                        </S.AddBtnWrapper>
                    </S.TemplateTitleWrapper>
                    <S.TemplateTitleInput type='text' placeholder='옵션명을 적어주세요' />
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

export default OptionalTemplate;
