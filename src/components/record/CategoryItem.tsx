import * as React from 'react';
import * as S from './style';

interface Item {
    id: number;
    category: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

interface CategoryItemProps {
    RecordList: Item[];
    sortedList: () => Item[];
}

const CategoryItem = ({ sortedList }: CategoryItemProps) => {
    return (
        <>
            {sortedList().map((item: any) => (
                <S.CategoryItem key={item.id} className={item.category}>
                    <S.CategoryItemInner>
                        <S.ItemImgBox className={item.category}>
                            <S.ItemImg className={item.category}></S.ItemImg>
                        </S.ItemImgBox>
                        <S.ItemCategory>{item.category}</S.ItemCategory>
                        <S.ItemTitle>{item.title}</S.ItemTitle>
                        <S.ItemDesc>{item.description}</S.ItemDesc>
                        <S.ItemDate>등록일: {item.createdAt}</S.ItemDate>
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
