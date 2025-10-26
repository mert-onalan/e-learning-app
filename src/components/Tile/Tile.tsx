import { COMPONENT_TYPE_LABELS, type IComponentItem } from "../../types/types";
import ProgressBar from "../ProgressBar/ProgressBar";
import { FaGraduationCap } from "react-icons/fa";
import "./Tile.scss";

export interface ITileProps {
    tileData: IComponentItem;
    onClick: (id: number) => void;
}

const Tile = (props: ITileProps) => {
    const { name, subtitle, type, image, progress, id } = props.tileData;
    const { onClick } = props;

    const handleClick = () => {
        onClick(id);
    };

    return (
        <button
            className='tile-container'
            onClick={handleClick}
            aria-label={`${name} course`}
            type='button'
        >
            <div className='tile-image-wrapper'>
                <img
                    src={image}
                    alt={`${name} course thumbnail`}
                    className='tile-image'
                    loading='lazy'
                />
            </div>
            <div className='tile-content'>
                <h3 className='tile-title'>{name}</h3>
                <p className='tile-subtitle'>{subtitle}</p>
                <ProgressBar progress={progress} />
                <div className='tile-type'>
                    <FaGraduationCap
                        className='tile-type-icon'
                        aria-hidden='true'
                    />
                    {COMPONENT_TYPE_LABELS[type]}
                </div>
            </div>
        </button>
    );
};

export default Tile;
