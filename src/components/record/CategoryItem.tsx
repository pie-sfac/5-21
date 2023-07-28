import * as React from 'react';
import * as S from './style';

interface Item {
    id: number;
    type: string;
    category: string;
    img: string;
    title: string;
    desc: string;
    date: number;
}

interface CategoryItemProps {
    RecordList: Item[];
    sortedList: () => Item[];
}

const CategoryItem: React.FC<CategoryItemProps> = ({ sortedList }) => {
    const formatDate = (date: number) => {
        const dateItem = new Date(date);
        const year = dateItem.getFullYear();
        const month = String(dateItem.getMonth() + 1).padStart(2, '0'); // 0부터 시작하므로 +1
        const day = String(dateItem.getDate()).padStart(2, '0');
        return `${year}년 ${month}월 ${day}일`;
    };

    return (
        <>
            {sortedList().map((item: any) => (
                <S.CategoryItem key={item.id} className={item.type}>
                    <S.CategoryItemInner>
                        <S.ItemImgBox className={item.type}>
                            <S.ItemImg className={item.type}></S.ItemImg>
                        </S.ItemImgBox>
                        <S.ItemCategory>{item.type}</S.ItemCategory>
                        <S.ItemTitle>{item.title}</S.ItemTitle>
                        <S.ItemDesc>{item.desc}</S.ItemDesc>
                        <S.ItemDate>등록일: {formatDate(item.date)}</S.ItemDate>
                    </S.CategoryItemInner>
                </S.CategoryItem>
            ))}
        </>
    );
};

CategoryItem.defaultProps = {
    RecordList: [],
};

export default CategoryItem;
