import React from "react";
import { IoClose } from "react-icons/io5";
import "./SearchBar.scss";

export interface ISearchBarProps {
    value: string;
    placeholder?: string;
    disabled?: boolean;
    onChange: (value: string) => void;
    onSearch: (value: string) => void;
    onClear?: () => void;
}

const SearchBar = (props: ISearchBarProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSearch(props.value);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value);
    };

    const handleClear = () => {
        props.onChange("");
        if (props.onClear) {
            props.onClear();
        }
    };

    return (
        <form className='search-bar' onSubmit={handleSubmit} role='search'>
            <div className='search-input-wrapper'>
                <input
                    type='search'
                    className='search-bar-input'
                    value={props.value}
                    onChange={handleChange}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    aria-label='Search'
                />
                {props.value && !props.disabled && (
                    <button
                        type='button'
                        className='search-clear-button'
                        onClick={handleClear}
                        aria-label='Clear search'
                    >
                        <IoClose size={18} />
                    </button>
                )}
            </div>
            <button
                type='submit'
                className='search-bar-button'
                disabled={props.disabled}
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
