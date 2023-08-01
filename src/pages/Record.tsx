import { useReducer, useRef, useEffect, useState, createContext } from 'react';
import * as S from './Record.modules';
// Components
import Nav from '../components/nav/Navigation';
import Header from '../components/nav/header';
import RecordContent from '../components/record/RecordContent';
// data
import { getRecordTemplates } from '../apis/RecordService';

interface RecordItem {
    id: number;
    category: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

type ActionType = { type: 'INIT'; data: RecordItem[] } | { type: 'CREATE'; data: RecordItem } | { type: 'REMOVE'; targetId: number } | { type: 'EDIT'; data: RecordItem };

// 🔥 reducer 🔥
const reducer = (state: RecordItem[], action: ActionType): RecordItem[] => {
    let newState: RecordItem[] = [];
    switch (action.type) {
        case 'INIT': {
            return action.data;
        }
        case 'CREATE': {
            newState = [action.data, ...state];
            break;
        }
        case 'REMOVE': {
            newState = state.filter((item) => item.id !== action.targetId);
            break;
        }
        case 'EDIT': {
            newState = state.map((item) => (item.id === action.data.id ? { ...action.data } : item));
            break;
        }
        default:
            return state;
    }
    return newState;
};

// 🔥 Context 🔥
export const RecordStateContext = createContext<RecordItem[]>([]);
export const RecordDispatchContext = createContext<{
    onCreate: (category: string, title: string, description: string, createdAt: string, updatedAt: string) => void;
    onRemove: (targetId: number) => void;
    onEdit: (targetId: number, category: string, title: string, description: string, createdAt: string, updatedAt: string) => void;
}>({
    onCreate: () => {},
    onRemove: () => {},
    onEdit: () => {},
});

// 🔥 APP 🔥
const RecordManagement = () => {
    // API 저장
    const [apiData, setApiData] = useState<RecordItem[]>([]);
    const [data, dispatch] = useReducer(reducer, []);

    const [isNavOpen, setIsNavOpen] = useState(true);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
        // API 호출
        const fetchData = async () => {
            const res = await getRecordTemplates();
            const apiData: RecordItem[] = res?.data.templates;
            setApiData(apiData);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (apiData.length > 0) {
            dispatch({ type: 'INIT', data: apiData });
        }
    }, [apiData]);

    const dataId = useRef<number>(0);

    //CREATE
    const onCreate = (category: string, title: string, description: string, createdAt: string, updatedAt: string) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: dataId.current,
                category,
                title,
                description,
                createdAt,
                updatedAt,
            },
        });
        dataId.current += 1;
    };
    //REMOVE
    const onRemove = (targetId: number) => {
        dispatch({ type: 'REMOVE', targetId });
    };
    //Edit
    const onEdit = (targetId: number, category: string, title: string, description: string, createdAt: string, updatedAt: string) => {
        dispatch({
            type: 'EDIT',
            data: {
                id: targetId,
                category,
                title,
                description,
                createdAt,
                updatedAt,
            },
        });
    };

    return (
        <RecordStateContext.Provider value={data}>
            <RecordDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
                <S.Wrapper>
                    <Nav isNavOpen={isNavOpen} />
                    <S.RecordWrapper className={isNavOpen ? '' : 'closed'}>
                        <Header breadcrumbProps={{ depth01: '기록 관리', depth02: '', depth03: '' }} toggleNav={toggleNav} />
                        <RecordContent />
                    </S.RecordWrapper>
                </S.Wrapper>
            </RecordDispatchContext.Provider>
        </RecordStateContext.Provider>
    );
};

export default RecordManagement;
