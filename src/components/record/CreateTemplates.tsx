import * as S from './style';
// img
import infoTooltip from '../../assets/icon-template-info.svg';
import upIcon from '../../assets/icon-order-up.svg';
import downIcon from '../../assets/icon-order-down.svg';
import uploadIcon from '../../assets/icon-upload.svg';
import closeIcon from '../../assets/icon-close-btn.svg';
import painIntvIcon from '../../assets/icon-category-pain_intv.svg';
import painHstryIcon from '../../assets/icon-category-pain_hstry.svg';
import ConditionIcon from '../../assets/icon-category-condition.svg';

// 기본문항(3) - 텍스트, 미디어, 선택형
export const TextTemplate = () => {
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

export const MediaTemplate = () => {
    return (
        <S.TemplateWrapper>
            <S.TemplateHeader>
                <S.TemplateHeaderTitle>
                    <S.Title>02 미디어</S.Title>
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
                    <S.Switch role='switch' type='checkbox' disabled></S.Switch>
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
                    <S.TemplateTitleLabel>답변자 미디어 첨부</S.TemplateTitleLabel>
                    <S.UploadBox>
                        <S.UploadTextBox>
                            <S.UploadIcon src={uploadIcon} />
                            <S.UploadDesc>Drag files to upload</S.UploadDesc>
                        </S.UploadTextBox>
                    </S.UploadBox>
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

export const SelectTemplate = () => {
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

// 전문 문항(3) - 통증문진(문진), 통증정도(처치), 오늘의컨디션(처치)
export const PainIntvTemplate = () => {
    return (
        <S.TemplateWrapper>
            <S.TemplateHeader>
                <S.TemplateHeaderTitle>
                    <S.Title>01 통증 문진</S.Title>
                    <S.CategoryLabel className={'professional'}>전문 문항</S.CategoryLabel>
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
                <S.CategoryInfoInner>
                    <S.CategoryInfo>통증 부위, 유형, 정도, 빈도, 기간을 작성하는 문항</S.CategoryInfo>
                    <S.CategoryIcon src={painIntvIcon} />
                </S.CategoryInfoInner>
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

export const PainHstryTemplate = () => {
    return (
        <S.TemplateWrapper>
            <S.TemplateHeader>
                <S.TemplateHeaderTitle>
                    <S.Title>01 통증 정도</S.Title>
                    <S.CategoryLabel className={'professional'}>전문 문항</S.CategoryLabel>
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
                <S.CategoryInfoInner>
                    <S.CategoryInfo>회원 통증 정도를 선택하는 문항</S.CategoryInfo>
                    <S.CategoryIcon src={painHstryIcon} />
                </S.CategoryInfoInner>
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

export const ConditionTemplate = () => {
    return (
        <S.TemplateWrapper>
            <S.TemplateHeader>
                <S.TemplateHeaderTitle>
                    <S.Title>01 오늘의 컨디션</S.Title>
                    <S.CategoryLabel className={'professional'}>전문 문항</S.CategoryLabel>
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
                <S.CategoryInfoInner>
                    <S.CategoryInfo>회원 컨디션 정도를 선택하는 문항</S.CategoryInfo>
                    <S.CategoryIcon src={ConditionIcon} />
                </S.CategoryInfoInner>
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
