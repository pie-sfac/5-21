import * as S from './style';
import backArrowIcon from '../assets/icon-back-arrow.svg';
import nextArrowIcon from '../assets/icon-next-arrow.svg';

const Pagination = () => {
    return (
        <S.Pagination>
            <S.BackBtn className={'disabled'}>
                <S.BackBtnIcon src={backArrowIcon} alt='icon-back-arrow' />
            </S.BackBtn>
            <S.Pager className={'active'}>1</S.Pager>
            <S.Pager>2</S.Pager>
            <S.Pager>3</S.Pager>
            <S.Pager>4</S.Pager>
            <S.Pager>5</S.Pager>
            <S.NextBtn>
                <S.NextBtnIcon src={nextArrowIcon} />
            </S.NextBtn>
        </S.Pagination>
    );
};

export default Pagination;
