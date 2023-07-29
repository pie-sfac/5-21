import React, { useReducer, useRef, useEffect } from 'react';
import * as S from './Record.modules';
// Components
import Nav from '../components/Nav/Navigation';
import Header from '../components/Nav/header';
import RecordContent from '../components/record/RecordContent';
// data
import { dummyArr } from '../components/commonConst/dummyItem';
import { getRecordTemplates } from '../apis/RecordService';

interface RecordItem {
    id: number;
    category: string;
    type: string;
    title: string;
    desc: string;
    date: number;
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
export const RecordStateContext = React.createContext<RecordItem[]>([]);
export const RecordDispatchContext = React.createContext<{
    onCreate: (category: string, type: string, img: string, title: string, desc: string, date: string) => void;
    onRemove: (targetId: number) => void;
    onEdit: (targetId: number, category: string, type: string, img: string, title: string, desc: string, date: string) => void;
}>({
    onCreate: () => {},
    onRemove: () => {},
    onEdit: () => {},
});

// 🔥 APP 🔥
const RecordManagement = () => {
    useEffect(() => {
        getRecordTemplates().then((res) => console.log(res.data));
    }, []);

    const [data, dispatch] = useReducer(reducer, dummyArr);

    const dataId = useRef<number>(0);

    //CREATE
    const onCreate = (category: string, type: string, title: string, desc: string, date: string) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: dataId.current,
                category,
                type,
                title,
                desc,
                date: new Date(date).getTime(),
            },
        });
        dataId.current += 1;
    };
    //REMOVE
    const onRemove = (targetId: number) => {
        dispatch({ type: 'REMOVE', targetId });
    };
    //Edit
    const onEdit = (targetId: number, category: string, type: string, title: string, desc: string, date: string) => {
        dispatch({
            type: 'EDIT',
            data: {
                id: targetId,
                category,
                type,
                title,
                desc,
                date: new Date(date).getTime(),
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
