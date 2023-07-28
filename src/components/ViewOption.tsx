import * as S from './style';
// img
import cardViewIcon from '../assets/icon-card-view.svg';
import listViewIcon from '../assets/icon-list-view.svg';

const ViewOption = ({ value, onChange, optionList }: any) => {
    return (
        <S.ViewOptionWrapper>
            <S.Selete value={value} onChange={(e: any) => onChange(e.target.value)}>
                {optionList.map((item: any, index: number) => (
                    <S.SeleteOption key={index} value={item.value}>
                        {item.name}
                    </S.SeleteOption>
                ))}
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
