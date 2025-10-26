import "./LoadingFallback.scss";

const LoadingFallback = () => {
    return (
        <div
            className='loading-fallback'
            role='status'
            aria-live='polite'
            aria-busy='true'
        >
            <div className='loading-spinner' aria-hidden='true' />
            <span className='loading-text'>Loading content, please wait…</span>
        </div>
    );
};

export default LoadingFallback;
