import React, { useReducer, useRef, useEffect, useState, createContext } from 'react';
import * as S from './Record.modules';
// Components
import Nav from '../components/Nav/Navigation';
import Header from '../components/Nav/header';
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
    console.log(apiData);
    useEffect(() => {
        // API 호출
        const fetchData = async () => {
            try {
                const res = await getRecordTemplates();
                const apiData: RecordItem[] = res.data.templates;
                setApiData(apiData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const [data, dispatch] = useReducer(reducer, apiData);

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
                    <Nav />
                    <S.RecordWrapper>
                        <Header depth01={'기록 관리'} depth02={''} depth03={''} />
                        <RecordContent />
                    </S.RecordWrapper>
                </S.Wrapper>
            </RecordDispatchContext.Provider>
        </RecordStateContext.Provider>
    );
};

export default RecordManagement;
