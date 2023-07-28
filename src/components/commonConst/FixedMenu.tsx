// Common
import MenuTextIcon from '../../assets/icon-fixedMenu-text.svg';
import MenuMediaIcon from '../../assets/icon-fixedMenu-media.svg';
import MenuSelectIcon from '../../assets/icon-fixedMenu-select.svg';
// Professional
import MenuPainIcon from '../../assets/icon-fixedMenu-pro01.svg';
import MenuConditionIcon from '../../assets/icon-fixedMenu-pro02.svg';
import MenuDiagnosisIcon from '../../assets/icon-fixedMenu-pro03.svg';

interface FixedMenuProps {
    id: number;
    title: string;
    desc: string;
    label: string;
    img: string;
    type: string;
}
export const FixedMenuCommonList: FixedMenuProps[] = [
    {
        id: 0,
        title: '텍스트',
        desc: '텍스트 형식의 답변을 입력하는 문항',
        label: '기본 문항',
        img: MenuTextIcon,
        type: 'common',
    },
    {
        id: 1,
        title: '미디어',
        desc: '이미지 혹은 영상을 답변으로 첨부하는 문항',
        label: '기본 문항',
        img: MenuMediaIcon,
        type: 'common',
    },
    {
        id: 2,
        title: '선택형',
        desc: '보기 중 선택해서 답변하는 문항',
        label: '기본 문항',
        img: MenuSelectIcon,
        type: 'common',
    },
];

export const FixedMenuProList: FixedMenuProps[] = [
    {
        id: 0,
        title: '통증 정도',
        desc: '회원 통증 정도를 선택하는 문항',
        label: '전문 문항',
        img: MenuPainIcon,
        type: 'professional',
    },
    {
        id: 1,
        title: '오늘의 컨디션',
        desc: '회원 컨디션 정도를 선택하는 문항',
        label: '전문 문항',
        img: MenuConditionIcon,
        type: 'professional',
    },
    {
        id: 2,
        title: '통증 문진',
        desc: '통증 부위, 유형, 정도, 빈도, 기간을 작성할 수 있는 문항',
        label: '전문 문항',
        img: MenuDiagnosisIcon,
        type: 'professional',
    },
];
