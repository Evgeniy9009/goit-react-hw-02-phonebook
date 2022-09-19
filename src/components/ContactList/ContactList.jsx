import css from 'components/ContactList/ContactList.module.css'

export default function ContactList({items , removeContact }) {
    const elements = items.map(({ name, number, id}) => {
      return (

          <li className={css.item} key={id} > {name} {number} <button className={css.btn} onClick={ () => {removeContact(id)} }>Delete</button></li>
          

      )
    })
  return (
      <div>
          <ul>{ elements }</ul>
    </div>
  )
}
