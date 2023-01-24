import InputChexbox from './forms/InputChexbox';
import InputSearch from './forms/InputSearch';
import style from './UsersListFilters.module.css'

const UsersListFilters = ({
    search,
    setSearch,
    onlyActive,
    setOnlyActive,
    sortBy,
    setSortBy
}) =>
    <form className={style.form}>
        <InputSearch
            placeholder='Buscar... '
            value={search}
            onChange={ev => {
                setSearch(ev.target.value);
            }} />
        <div className={style.active}>
            <InputChexbox
                checked={onlyActive}
                className={style.checkbox}
                onChange={
                ev => {
                    setOnlyActive(ev.target.checked)
                }} />
            <p>Solo activos</p>
        </div>
        <select value={sortBy} onChange={ev => {
            setSortBy(Number(ev.target.value))
        }}>
            <option value={0}>Por defecto</option>
            <option value={1}>Por nombre</option>
            <option value={2}>Por rol</option>
            {!onlyActive && <option value={3}>Por activación</option>}
        </select>
    </form>


export default UsersListFilters