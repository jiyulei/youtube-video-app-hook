import React, { useState } from 'react';
// class SearchBar extends React.Component {
//     state = { searchValue: '' };

//     handleFormSubmit = (event) => {
//         event.preventDefault();
//         this.props.onTermSubmit(this.state.searchValue);
//     }

//     render() {
//         return (
//             <div className='search-bar ui segment'>
//                 <form onSubmit={this.handleFormSubmit} className="ui form">
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input type='text' 
//                         value={this.state.searchValue} 
//                         onChange={e => this.setState({ searchValue: e.target.value})}/>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

// using hook to refactor

const SearchBar = ({ onTermSubmit }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        onTermSubmit(searchValue);
    };

    return (
        <div className='search-bar ui segment'>
            <form onSubmit={handleFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type='text' 
                    value={searchValue} 
                    onChange={e => setSearchValue(e.target.value)}/>
                </div>
            </form>
        </div>
    );
};


export default SearchBar;