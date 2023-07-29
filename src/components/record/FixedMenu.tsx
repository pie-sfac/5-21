import * as S from './style';

interface FixedMenuProps {
    title: string;
    desc: string;
    label: string;
    img: string;
    type: string;
}

const FixedMenu = ({ title, desc, img, label, type }: FixedMenuProps) => {
    return (
        <S.FixedMenuItem className={type}>
            <S.FixedItemImgBox>
                <S.FixedItemImg src={img} alt='icon-fixed-menu' />
            </S.FixedItemImgBox>
            <S.ItemTitleWrapper>
                <S.FixedItemTitle>{title}</S.FixedItemTitle>
                <S.FixedItemDesc>{desc}</S.FixedItemDesc>
            </S.ItemTitleWrapper>
            <S.FixedItemLabel>{label}</S.FixedItemLabel>
        </S.FixedMenuItem>
    );
};

export default FixedMenu;
