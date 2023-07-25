import { useNavigate } from 'react-router-dom';

const RecordEdit = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Edit</h1>
            <p>Edit Page</p>
            <button
                onClick={() => {
                    navigate('/record');
                }}
            ></button>
        </div>
    );
};

export default RecordEdit;
