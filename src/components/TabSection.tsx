import { useState, useContext } from 'react';
import { RecordStateContext } from '../pages/Record';
import * as S from './style';
// Components
import Button from './Button';
import Pagination from './Pagination';
import CategoryItem from './record/CategoryItem';
import ViewOption from './ViewOption';
import TabMenu from './TabMenu';

interface CreateModalProps {
    setModal: (value: boolean) => void;
}

const TabSection = ({ setModal }: CreateModalProps) => {
    const RecordList = useContext(RecordStateContext);

    const [isActiveTab, setIsActiveTab] = useState<number>(0);

    const [sortType, setSortType] = useState('latest');
    const sortOption = [
        { value: 'latest', name: '최신순' },
        { value: 'oldest', name: '오래된순' },
    ];

    const TabArr = [
        { id: 0, value: '전체 보기', content: 'Tab menu 0' },
        { id: 1, value: '문진', content: 'Tab menu 1' },
        { id: 2, value: '처치', content: 'Tab menu 2' },
    ];

    const getPeocessRecordList = () => {
        const tabCallBack = (item: any) => {
            if (isActiveTab === 1) {
                return item.category === '문진';
            } else if (isActiveTab === 2) {
                return item.category === '처치';
            }
        };

        const compare = (a: any, b: any) => {
            if (sortType === 'latest') {
                return parseInt(b.date) - parseInt(a.date);
            } else {
                return parseInt(a.date) - parseInt(b.date);
            }
        };
        const copy = [...RecordList];

        const tabContentList = isActiveTab === 0 ? copy : copy.filter((item) => tabCallBack(item));

        const sortedList = tabContentList.sort(compare);
        return sortedList;
    };

    const handleTab = (idx: number) => {
        setIsActiveTab(idx);
    };
    const handleCreateModal = () => {
        setModal(true);
    };

    return (
        <S.TabSection>
            <S.TabWrapper>
                <TabMenu TabArr={TabArr} isActiveTab={isActiveTab} onClick={handleTab} />
            </S.TabWrapper>
            <S.TabContent>
                <S.CategoryHeader>
                    <S.CategoryTitleWrapper>
                        <S.SubTitle>기록 전체보기</S.SubTitle>
                        <S.Count>{RecordList.length}</S.Count>
                    </S.CategoryTitleWrapper>
                    <ViewOption value={sortType} onChange={setSortType} optionList={sortOption} />
                </S.CategoryHeader>
                <S.CategoryContent className={'grid'}>
                    <CategoryItem RecordList={RecordList} sortedList={getPeocessRecordList} />
                </S.CategoryContent>
                <S.CategoryFooter>
                    <S.FooterItemCount>[1 to 5] 총 {RecordList.length}개</S.FooterItemCount>
                    <Pagination />
                    <Button text={'등록'} type={'primary'} onClick={handleCreateModal} />
                </S.CategoryFooter>
            </S.TabContent>
        </S.TabSection>
    );
};

export default TabSection;
