const SearchBox = ({ searchName, handleSearch }) => {
    return (
        <div >
            <label htmlFor='find'>Find contacts by name</label>
            <input type='text' name='find' id='find' value={searchName} onChange={(e)=>handleSearch(e.target.value)} />
        </div>
    )
}

export default SearchBox