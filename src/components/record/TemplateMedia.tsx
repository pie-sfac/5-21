import * as S from './style';
// img
import infoTooltip from '../../assets/icon-template-info.svg';
import templateClosedToggleIcon from '../../assets/icon-template-toggle-arrow.svg';
import upIcon from '../../assets/icon-order-up.svg';
import downIcon from '../../assets/icon-order-down.svg';
import uploadIcon from '../../assets/icon-upload.svg';
import closeIcon from '../../assets/icon-close-btn.svg';

const MediaTemplate = () => {
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

export default MediaTemplate;
