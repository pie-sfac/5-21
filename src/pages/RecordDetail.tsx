import { useParams } from 'react-router-dom';

const RecordDetail = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Detail</h1>
            <p>Detail Page</p>
        </div>
    );
};

export default RecordDetail;
