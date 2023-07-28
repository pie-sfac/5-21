import { useState, useContext } from 'react';
import { RecordStateContext } from '../../pages/Record';
import * as S from './style';
// Components
import CreateModal from '../record/CreateModal';
import TabMenu from '../TabMenu';
import CategoryItem from './CategoryItem';
import Pagination from '../../components/Pagination';
// img
import addIcon from '../../assets/icon-create-template.svg';

const RecordContent = () => {
    const RecordList = useContext(RecordStateContext);

    const [modal, setModal] = useState<boolean>(false);
    const [isActiveTab, setIsActiveTab] = useState<number>(0);
    const [sortType, setSortType] = useState('latest');

    const sortOption = [
        { value: 'latest', name: '최신순' },
        { value: 'oldest', name: '오래된순' },
    ];

    const TabArr = [
        { id: 0, value: '전체 보기' },
        { id: 1, value: '문진' },
        { id: 2, value: '처치' },
    ];

    const handleTab = (idx: number) => {
        setIsActiveTab(idx);
    };
    const handleCreateModal = () => {
        setModal(true);
    };

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

    return (
        <S.RecordContent>
            <S.TitleSection>
                <S.RecordTitle>기록 관리</S.RecordTitle>
                <S.CreateTemplateBtn>
                    <S.AddIcon src={addIcon} alt='icon-create' />
                    Create Template
                </S.CreateTemplateBtn>
            </S.TitleSection>
            <S.TabSection>
                <S.TabWrapper>
                    <TabMenu TabArr={TabArr} isActiveTab={isActiveTab} onClick={handleTab} />
                </S.TabWrapper>
                <S.TabContent>
                    <S.TabContentHeader>
                        <S.TitleWrapper>
                            <S.TabContentTitle>템플릿 전체보기</S.TabContentTitle>
                            <S.CountLabel>{RecordList.length}</S.CountLabel>
                        </S.TitleWrapper>
                        <S.SortSelect value={sortType} onChange={(e: any) => setSortType(e.target.value)}>
                            {sortOption.map((item: any, index: number) => (
                                <S.SeleteOption key={index} value={item.value}>
                                    {item.name}
                                </S.SeleteOption>
                            ))}
                        </S.SortSelect>
                    </S.TabContentHeader>
                    <S.CategoryContent className={'grid'}>
                        <CategoryItem RecordList={RecordList} sortedList={getPeocessRecordList} />
                    </S.CategoryContent>
                    <S.TabContentFooter>
                        <S.FooterItemCount>총 {RecordList.length}개</S.FooterItemCount>
                        <Pagination />
                    </S.TabContentFooter>
                </S.TabContent>
            </S.TabSection>

            {/* modal */}
            {modal && <CreateModal setModal={setModal} />}
        </S.RecordContent>
    );
};

export default RecordContent;
