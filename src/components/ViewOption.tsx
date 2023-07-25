import * as S from './style';
// img
import cardViewIcon from '../assets/icon-card-view.svg';
import listViewIcon from '../assets/icon-list-view.svg';

const ViewOption = () => {
    return (
        <S.ViewOptionWrapper>
            <S.Selete>
                <S.SeleteOption>최신순</S.SeleteOption>
                <S.SeleteOption>오래된순</S.SeleteOption>
            </S.Selete>
            <S.ViewBtnWrapper>
                <S.ViewBtnType>
                    <S.CardViewBtn>
                        <S.CardViewIcon src={cardViewIcon} alt='icon-card-view' />
                    </S.CardViewBtn>
                    <S.ListViewBtn>
                        <S.ListViewIcon src={listViewIcon} alt='icon-list-view' />
                    </S.ListViewBtn>
                </S.ViewBtnType>
            </S.ViewBtnWrapper>
        </S.ViewOptionWrapper>
    );
};

export default ViewOption;
