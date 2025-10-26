import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Tile from "../../components/Tile/Tile";
import PageHeader from "../../components/PageHeader/PageHeader";
import { mainPageMockData } from "../../data/mockData";
import { useSearch } from "../../hooks/useSearch";
import { getComponentDetailsPath } from "../../routes";

import "./MainPage.scss";

const MainPage = () => {
    const navigate = useNavigate();
    const [mainPageData] = useState(mainPageMockData);

    const {
        searchTerm,
        setSearchTerm,
        filteredData,
        resultCount,
        handleSearch,
        handleClear,
        isFiltered,
    } = useSearch({ data: mainPageData.contents });

    const handleTileClick = (id: number) => {
        navigate(getComponentDetailsPath(id));
    };

    return (
        <div className='main-page'>
            <PageHeader title='Learning status' status='Current' />
            <div className='main-page-content'>
                <div className='main-page-filter-area'>
                    <SearchBar
                        value={searchTerm}
                        onChange={setSearchTerm}
                        onSearch={handleSearch}
                        onClear={handleClear}
                        placeholder="Search term"
                    />
                </div>
                <div className='main-page-item-count'>
                    {isFiltered
                        ? `Showing ${resultCount} of ${mainPageData.count} results`
                        : `${mainPageData.count} results`}
                </div>
                {filteredData.map((content) => {
                    return (
                        <Tile
                            key={content.id}
                            tileData={content}
                            onClick={handleTileClick}
                        />
                    );
                })}
                {isFiltered && filteredData.length === 0 && (
                    <div className='no-results'>
                        <p>No results found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainPage;
