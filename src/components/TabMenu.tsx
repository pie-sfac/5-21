import * as S from './style';

interface TabProps {
    TabArr: TabItemProps[];
    isActiveTab: number;
    onClick: (id: number) => void;
}

interface TabItemProps {
    id: number;
    value: string;
    content: any;
}

const TabMenu: React.FC<TabProps> = ({ TabArr, isActiveTab, onClick }) => {
    return (
        <S.Tab>
            {TabArr.map((item) => (
                <S.TabItem
                    key={item.id}
                    className={item.id === isActiveTab ? 'active' : ''}
                    onClick={() => {
                        onClick(item.id);
                    }}
                >
                    {item.value}
                </S.TabItem>
            ))}
        </S.Tab>
    );
};

export default TabMenu;
