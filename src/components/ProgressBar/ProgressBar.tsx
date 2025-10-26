import "./ProgressBar.scss";

export interface IProgressBarProps {
    progress: number;
}

const ProgressBar = (props: IProgressBarProps) => {
    const safeProgress = Math.min(Math.max(props.progress, 0), 100);

    return (
        <div
            className='progress-bar'
            role='progressbar'
            aria-label={`Course progress: ${safeProgress}%`}
            aria-valuenow={safeProgress}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <div
                className='progress-bar-fill'
                style={{ width: `${safeProgress}%` }}
            />
        </div>
    );
};

export default ProgressBar;
