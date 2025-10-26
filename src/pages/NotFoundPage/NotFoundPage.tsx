import { useNavigate } from "react-router-dom";
import notFoundImage from "../../assets/images/404-illustration.svg";

import "./NotFoundPage.scss";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className='notfound'>
            <img
                src={notFoundImage}
                alt='Illustration showing 404 error'
                className='notfound-image'
                loading='lazy'
            />

            <div className='notfound-text'>
                <h1 className='notfound-title'>Oops!</h1>
                <p className='notfound-description'>
                    We couldn’t find the page you were looking for.
                </p>
                <button
                    className='notfound-button'
                    onClick={() => navigate("/")}
                    aria-label='Go back to main page'
                >
                    Go to Main Page
                </button>
            </div>
        </div>
    );
};

export default NotFoundPage;
