import { useEffect } from 'react';
import * as S from './style';
import RecordImg from '../../assets/recordImg.jpeg';
import { getArchiveLinks } from '../../apis/LinkService';

// {
//     "archiveLinks": [
//       {
//         "id": 0,
//         "centerId": 0,
//         "category": {
//           "id": 0,
//           "title": "string",
//           "description": "string"
//         },
//         "site": "UNKNOWN",
//         "url": "string",
//         "title": "string",
//         "description": "string",
//         "createdAt": "2023-07-26T02:52:50.272Z",
//         "updatedAt": "2023-07-26T02:52:50.272Z"
//       }
//     ],
//     "message": "string"
//   }

const LinkItem = () => {
  useEffect(() => {
    getArchiveLinks().then((res) => console.log(res.data));
  }, []);
  return (
    <S.LinkItemWrapper>
      <S.LinkImg src={RecordImg} alt="" />
      <S.LinkContentDiv>
        <S.LinklTitle>상체운동입니다.</S.LinklTitle>
        <S.LinklSpan>매일 아침 30분 따라해보세요</S.LinklSpan>
      </S.LinkContentDiv>
    </S.LinkItemWrapper>
  );
};

export default LinkItem;
