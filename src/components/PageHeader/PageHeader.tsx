import "./PageHeader.scss";

export interface IPageHeaderProps {
    title: string;
    status: string;
    subTitle?: string;
    image?: string;
    subTitleIcon?: React.ReactNode;
}

const PageHeader = (props: IPageHeaderProps) => {
    return (
        <div className='page-header-wrapper'>
            <div className='page-header-content'>
                <div className='page-header-title-area'>
                    <h2 className='page-header-title'>{props.title}</h2>
                    {props.subTitle && (
                        <div className='page-header-subtitle'>
                            {props.subTitleIcon && (
                                <span className='page-header-subtitle-icon'>
                                    {props.subTitleIcon}
                                </span>
                            )}
                            <span>{props.subTitle}</span>
                        </div>
                    )}
                </div>
                <div className='page-header-status'>{props.status}</div>
            </div>
            {props.image && (
                <div className='page-header-image-area'>
                    <img
                        src={props.image}
                        alt={`${props.title} course thumbnail`}
                        className='page-header-image'
                        loading='lazy'
                    />
                </div>
            )}
        </div>
    );
};

export default PageHeader;
