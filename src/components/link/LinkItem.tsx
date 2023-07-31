import { useEffect } from 'react';
import * as S from './style';
import RecordImg from '../../assets/recordImg.jpeg';
import { getArchiveLinks } from '../../apis/LinkService';
import PlayArrow from '../../assets/icon-play_arrow.svg';
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
    getArchiveLinks().then((res) => res?.data);
  }, []);
  return (
    <S.LinkItemWrapper>
      <S.LinkItemImgContent>
        <S.LinkImg src={RecordImg} alt="" />
        <S.PlayBtnDiv>
          <S.PlayIcon src={PlayArrow} alt="playArrow" />
        </S.PlayBtnDiv>
      </S.LinkItemImgContent>
      <S.LinkContentDiv>
        <S.LinkCartegoryH2>특수 운동</S.LinkCartegoryH2>
        <S.LinklTitle>영상 제목입니다.</S.LinklTitle>
        <S.LinkExplain>
          <S.LinkExplainP>
            설명입니다. 두 줄까지 작성
            가능합니다.ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
          </S.LinkExplainP>
        </S.LinkExplain>
        <S.LinkUploadDateSpan>등록일 : 2023년 07월 24일</S.LinkUploadDateSpan>
      </S.LinkContentDiv>
    </S.LinkItemWrapper>
  );
};

export default LinkItem;
