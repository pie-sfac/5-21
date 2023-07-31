import * as S from './style';
import { LinkTabPropsType } from '../../types/link/linkType';

export const LinkTab = (props: LinkTabPropsType) => {
  return (
    <>
      <S.TabButton
        onClick={() => {
          props.setIsActiveTab(props.category.id);
        }}
        className={props.isActiveTab === props.category.id ? 'active' : ''}
      >
        {props.category.title}
      </S.TabButton>
    </>
  );
};
