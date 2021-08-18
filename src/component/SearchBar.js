import React from 'react';

class SearchBar extends React.Component {
    state = { searchValue: '' };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.searchValue);
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type='text' 
                        value={this.state.searchValue} 
                        onChange={e => this.setState({ searchValue: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;