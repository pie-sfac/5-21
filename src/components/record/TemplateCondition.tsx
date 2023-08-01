import * as S from './style';
// img
import infoTooltip from '../../assets/icon-template-info.svg';
import upIcon from '../../assets/icon-order-up.svg';
import downIcon from '../../assets/icon-order-down.svg';
import closeIcon from '../../assets/icon-close-btn.svg';
import ConditionIcon from '../../assets/icon-category-condition.svg';

const ConditionTemplate = () => {
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

export default ConditionTemplate;
