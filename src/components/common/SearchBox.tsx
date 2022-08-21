import React from 'react';

interface SearchBoxProps {
    value: 'string',
    onChange: () => void
}

const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange}) => {
    return (
        <input type="text" name="query" value={value} onChange={(e: React.FormEvent) => onChange(e.currentTarget.value)} className="form-control my-3" placeholder='Search...' />
    );
}

export default SearchBox