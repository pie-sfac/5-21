import * as S from './style';
import { LinkTabPropsType } from '../../types/link/linkType';
import { useLinkContextState, useLinkDispatch } from '../../pages/LinkContext';

export const LinkTab = (props: LinkTabPropsType) => {
  const { isActiveTab } = useLinkContextState();
  const dispatch = useLinkDispatch();

  const setIsActiveTab = (tabNumber: number) => {
    dispatch({ type: 'SET_ACTIVE_TAB', payload: tabNumber });
  };
  return (
    <>
      <S.TabButton
        onClick={() => {
          setIsActiveTab(props.category.id);
        }}
        className={isActiveTab === props.category.id ? 'active' : ''}
      >
        {props.category.title}
      </S.TabButton>
    </>
  );
};
