import css from 'components/ContactList/ContactList.modale.css'

export default function ContactList({items , removeContact }) {
    const elements = items.map(({ name, number, id}) => {
      return (

          <li key={id} > {name} {number} <button onClick={ () => {removeContact(id)} }>Delete</button></li>
          

      )
    })
  return (
      <div>
          <ul>{ elements }</ul>
    </div>
  )
}
