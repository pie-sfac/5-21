// img
import diagnosis from '../../assets/icon-diagnosis.svg';
import prescription from '../../assets/icon-prescription.svg';

interface RecordItem {
    id: number;
    category: string;
    type: string;
    img: string;
    title: string;
    desc: string;
    date: number;
}

// 👉 더미 데이터 적용중 (❌API 연결 전입니다.❌)
export const dummyArr: RecordItem[] = [
    { id: 0, category: '문진', type: 'diagnosis', img: diagnosis, title: '통증 있는 회원 문진 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.', date: 1690243200000 },
    { id: 1, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.', date: 1690156800000 },
    { id: 2, category: '문진', type: 'diagnosis', img: diagnosis, title: '통증 있는 회원 문진 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.', date: 1690070400000 },
    { id: 3, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.', date: 1689984000000 },
    { id: 4, category: '문진', type: 'diagnosis', img: diagnosis, title: '통증 있는 회원 문진 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.', date: 1689897600000 },
    { id: 5, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.', date: 1689811200000 },
    { id: 6, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.', date: 1689724800000 },
    { id: 7, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.', date: 1689638400000 },
    { id: 8, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.', date: 1689552000000 },
    { id: 9, category: '문진', type: 'diagnosis', img: diagnosis, title: '통증 있는 회원 문진 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.', date: 1689465600000 },
    { id: 10, category: '문진', type: 'diagnosis', img: diagnosis, title: '통증 있는 회원 문진 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.', date: 1689379200000 },
    { id: 11, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.', date: 1689292800000 },
];
