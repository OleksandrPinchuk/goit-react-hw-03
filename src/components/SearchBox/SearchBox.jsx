import css from './SearchBox.module.css'
const SearchBox = ({ searchName, handleSearch }) => {
    
    return (
        <div className={css.box}>
            <label htmlFor='find' className={css.label}>Find contacts by name</label>
            <input type='text' name='find' id='find' value={searchName} onChange={(e)=>handleSearch(e.target.value)} className={css.field} />
        </div>
    )
}

export default SearchBox