import React from 'react';

const SearchBar = ({onInputChange = Function}) => {
	return (
		<nav className='search-bar blue-grey lighten-5'>
			<div className='nav-wrapper'>
				<form className=''>
					<div className='input-field'>
						<input id='search' type='search' onChange={onInputChange} placeholder='Type to search' />
						<label htmlFor='search'><i className='material-icons'>search</i></label>
						<i className='material-icons'>close</i>
					</div>
				</form>
			</div>
		</nav>
	);
}

export default SearchBar;