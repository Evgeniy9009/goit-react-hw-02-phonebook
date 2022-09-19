import css from 'components/Filter/Filter.module.css'

export default function Filter({filter, handleChange}) {
    return (
        <div className={css.filter}>
            <label htmlFor="filter"> Find contacts by name</label>
            <input className={css.input} id= "filter" type="text" name='filter' onChange={handleChange} value={filter} />
        </div>
  )
}


