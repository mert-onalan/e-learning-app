import { useParams, useNavigate } from "react-router-dom";
import { IoIosLink } from "react-icons/io";
import { CiAt } from "react-icons/ci";
import { IoChevronBack } from "react-icons/io5";
import PageHeader from "../../components/PageHeader/PageHeader";
import { componentDetailsMockData } from "../../data/mockData";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { formatDate } from "../../utils/dateFormatter";
import { useShareCourse } from "../../hooks/useShareCourse";
import { IoMdTime } from "react-icons/io";

import "./DescriptionPage.scss";

const DescriptionPage = () => {
    const { id } = useParams<{ id: string }>();
    const componentDetailMockData = id !== undefined ? componentDetailsMockData[Number(id)] : undefined;
    const navigate = useNavigate();

    const { copyToClipboard, shareViaEmail } = useShareCourse({
        courseId: id ?? "",
        courseName: componentDetailMockData?.name ?? "",
    });

    if (componentDetailMockData === undefined) {
        return <NotFoundPage />;
    }

    const { description_data, startDate, endDate, learningForm, name, image } =
        componentDetailMockData;

    const handleBackButtonClick = () => {
        navigate("/");
    };

    return (
        <main className='description-page'>
            <nav className='breadcrumb-nav' aria-label='Breadcrumb'>
                <button
                    onClick={handleBackButtonClick}
                    className='breadcrumb-button'
                >
                    <IoChevronBack size={18} />
                    <span>All Courses</span>
                </button>
            </nav>
            <PageHeader
                title={name}
                status='Description'
                image={image}
                subTitle={`${formatDate(startDate)} to ${formatDate(endDate)}`}
                subTitleIcon={<IoMdTime size={20} />}
            />

            <main className='course-details-content'>
                <section
                    className='course-info-section'
                    aria-labelledby='course-title'
                >
                    <dl className='course-info-list'>
                        {description_data.map((item) => (
                            <div key={item.name} className='course-info-item'>
                                <dt className='label'>{item.name}</dt>
                                <dd className='value'>{item.content}</dd>
                            </div>
                        ))}

                        <div className='course-info-item'>
                            <dt className='label'>Start date</dt>
                            <dd className='value'>{formatDate(startDate)}</dd>
                        </div>
                        <div className='course-info-item'>
                            <dt className='label'>End date</dt>
                            <dd className='value'>{formatDate(endDate)}</dd>
                        </div>
                        <div className='course-info-item'>
                            <dt className='label'>Learning mode</dt>
                            <dd className='value'>{learningForm}</dd>
                        </div>
                    </dl>
                </section>

                <aside
                    className='course-summary-panel'
                    aria-label='Course summary and sharing options'
                >
                    <div
                        className='course-summary-card'
                        role='group'
                        aria-label='Course summary'
                    >
                        <dl className='course-summary-list'>
                            <div className='course-summary-item'>
                                <dt className='course-summary-item-title'>
                                    Start date
                                </dt>
                                <dd>{formatDate(startDate)}</dd>
                            </div>
                            <div className='course-summary-item'>
                                <dt className='course-summary-item-title'>
                                    End date
                                </dt>
                                <dd>{formatDate(endDate)}</dd>
                            </div>
                            <div className='course-summary-item'>
                                <dt className='course-summary-item-title'>
                                    Learning mode
                                </dt>
                                <dd>{learningForm}</dd>
                            </div>
                        </dl>
                    </div>

                    <div
                        className='course-share-card'
                        role='region'
                        aria-label='Share this course'
                    >
                        <div className='share-title'>Share this course</div>
                        <div className='share-actions'>
                            <button
                                type='button'
                                onClick={copyToClipboard}
                                className='share-button'
                                aria-label='Copy course link'
                                title='Copy to clipboard'
                            >
                                <IoIosLink className='copy-course-link-logo' />
                            </button>
                            <button
                                type='button'
                                onClick={shareViaEmail}
                                className='share-button'
                                aria-label='Share course by email'
                                title='Share via email'
                            >
                                <CiAt className='share-course-logo' />
                            </button>
                        </div>
                    </div>
                </aside>
            </main>
        </main>
    );
};

export default DescriptionPage;
