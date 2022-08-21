import React from 'react';

interface SearchBoxProps {
    value: string,
    onChange: (value: string) => void
}

const SearchBox = ({ value, onChange}: SearchBoxProps) => {
    
    return (
        <input type="text" name="query" value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.currentTarget.value)} className="form-control my-3" placeholder='Search...' />
    );
}

export default SearchBox