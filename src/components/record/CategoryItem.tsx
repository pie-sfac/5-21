import * as S from './style';
// img
import diagnosis from '../../assets/icon-diagnosis.svg';
import prescription from '../../assets/icon-prescription.svg';

const CategoryItem = () => {
    // 👉 더미 데이터 적용중 (❌API 연결 전입니다.❌)
    const dummyArr = [
        { id: 0, category: '문진', type: 'diagnosis', img: diagnosis, title: '통증 있는 회원 문진 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.' },
        { id: 1, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.' },
        { id: 2, category: '문진', type: 'diagnosis', img: diagnosis, title: '통증 있는 회원 문진 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.' },
        { id: 3, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.' },
        { id: 4, category: '문진', type: 'diagnosis', img: diagnosis, title: '통증 있는 회원 문진 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.' },
        { id: 5, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.' },
        { id: 6, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.' },
        { id: 7, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.' },
        { id: 8, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.' },
        { id: 9, category: '문진', type: 'diagnosis', img: diagnosis, title: '통증 있는 회원 문진 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.' },
        { id: 10, category: '문진', type: 'diagnosis', img: diagnosis, title: '통증 있는 회원 문진 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.' },
        { id: 11, category: '처치', type: 'prescription', img: prescription, title: '다이어트용 템플릿', desc: '템플릿 미리보기 설명을 적어주세요.' },
    ];

    return (
        <>
            {dummyArr.map((item) => (
                <S.CategoryItem key={item.id}>
                    <S.CategoryItemInner>
                        <S.CategoryLabel className={item.type}>{item.category}</S.CategoryLabel>
                        <S.ItemImgBox className={item.type}>
                            <S.ItemImg src={item.img} />
                        </S.ItemImgBox>
                        <S.ItemTitle>{item.title}</S.ItemTitle>
                        <S.ItemDesc>{item.desc}</S.ItemDesc>
                    </S.CategoryItemInner>
                </S.CategoryItem>
            ))}
        </>
    );
};

export default CategoryItem;
