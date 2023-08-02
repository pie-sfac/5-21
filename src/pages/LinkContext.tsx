import React, {
  useReducer,
  createContext,
  Dispatch,
  useEffect,
  useContext,
} from 'react';
import { getAllLinksApi, getLinkApi } from '../apis/LinkService';
import { getLinkDataType } from '../types/link/linkType';

type Action =
  | { type: 'GET_LINKS'; payload: getLinkDataType[] }
  | { type: 'SET_ACTIVE_TAB'; payload: number }
  | { type: 'OPEN_CENTER_LINK_MODAL'; payload: boolean }
  | { type: 'GET_SELECTED_LINK_ID'; payload: number };

type State = {
  links: getLinkDataType[];
  isActiveTab: number;
  isCenterLinkModalOpen: boolean;
  selectedLinkId: number;
};

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type LinkDispatch = Dispatch<Action>;

// Context 생성
const LinkContext = createContext<State | null>(null);
const LinkDispatchContext = createContext<LinkDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'GET_LINKS':
      return { ...state, links: action.payload };

    case 'SET_ACTIVE_TAB':
      return { ...state, isActiveTab: action.payload };

    case 'OPEN_CENTER_LINK_MODAL':
      return { ...state, isCenterLinkModalOpen: action.payload };

    case 'GET_SELECTED_LINK_ID':
      return { ...state, selectedLinkId: action.payload };
    default:
      throw new Error('Unhandled action');
  }
}

export function LinkProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    links: [],
    isActiveTab: -1,
    isCenterLinkModalOpen: false,
    selectedLinkId: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      // 링크 전체 가져오기
      const getAllData: getLinkDataType[] = await getAllLinksApi()?.then(
        (res) => res?.data.archiveLinks
      );

      dispatch({ type: 'GET_LINKS', payload: getAllData });
    };

    fetchData();
  }, []);

  return (
    <LinkContext.Provider value={state}>
      <LinkDispatchContext.Provider value={dispatch}>
        {children}
      </LinkDispatchContext.Provider>
    </LinkContext.Provider>
  );
}

// state 와 dispatch 커스텀 Hooks
export function useLinkContextState() {
  const state = useContext(LinkContext);
  if (!state) throw new Error('Cannot find Provider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useLinkDispatch() {
  const dispatch = useContext(LinkDispatchContext);
  if (!dispatch) throw new Error('Cannot find Provider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
