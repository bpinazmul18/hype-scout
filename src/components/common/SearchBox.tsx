import React from 'react';

interface SearchBoxProps {
    value: string,
    onChange: (value: string) => void
}

const SearchBox = ({ value, onChange}: SearchBoxProps) => {
    
    return (
        <input type="text" name="query" value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.currentTarget.value)} className="form-control search-icon" placeholder='Search Profile...' />
    );
}

export default SearchBox