import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
    const [term, setTerm] = useState('');
    const handleSubmit = e => {
        e.preventDefault();

        if (term === '' || !term) return;
        onSubmit(term);
        setTerm('');
    };
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="search">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search city"
                        onChange={e => setTerm(e.target.value.trim())}
                        value={term}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
