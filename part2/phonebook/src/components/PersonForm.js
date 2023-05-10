const PersonForm = (props) =>
{
 return (
  <form onSubmit={props.handleAddPerson}>
  <div>
    name: <input value={props.name} onChange={props.handleName}/>
  </div>
  <div>
    number: <input value={props.number} onChange={props.handleNumber}/>
  </div>
  <div>
    <button type="submit">add</button>
  </div>
</form>
 )
}

export default PersonForm