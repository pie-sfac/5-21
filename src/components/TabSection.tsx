import { useState } from 'react';
import * as S from './style';
// Components
import Button from './Button';
import Pagination from './Pagination';
import CategoryItem from './record/CategoryItem';
import ViewOption from './ViewOption';

interface TabItemProps {
    id: number;
    title: string;
    content: string;
}

interface CreateModalProps {
    setModal: (value: boolean) => void;
}

const Tab = ({ setModal }: CreateModalProps) => {
    const [isActiveTab, setIsActiveTab] = useState<number>(0);

    const TabArr: TabItemProps[] = [
        { id: 0, title: '전체 보기', content: 'Tab menu 0' },
        { id: 1, title: '문진', content: 'Tab menu 1' },
        { id: 2, title: '처치', content: 'Tab menu 2' },
    ];
    const handleTab = (idx: number) => {
        setIsActiveTab(idx);
    };
    const handleCreateModal = () => {
        setModal(true);
    };

    return (
        <S.TabSection>
            <S.TabWrapper>
                {TabArr.map((item) => (
                    <S.Tab
                        key={item.id}
                        className={item.id === isActiveTab ? 'active' : ''}
                        onClick={() => {
                            handleTab(item.id);
                        }}
                    >
                        {item.title}
                    </S.Tab>
                ))}
            </S.TabWrapper>
            <S.TabContent>
                <S.CategoryHeader>
                    <S.CategoryTitleWrapper>
                        <S.SubTitle>기록 전체보기</S.SubTitle>
                        <S.Count>50</S.Count>
                    </S.CategoryTitleWrapper>
                    <ViewOption />
                </S.CategoryHeader>
                <S.CategoryContent className={'grid'}>
                    <CategoryItem />
                </S.CategoryContent>
                <S.CategoryFooter>
                    <S.FooterItemCount>[1 to 5] 총 50개</S.FooterItemCount>
                    <Pagination />
                    <Button text={'등록'} type={'primary'} onClick={handleCreateModal} />
                </S.CategoryFooter>
            </S.TabContent>
        </S.TabSection>
    );
};

export default Tab;
