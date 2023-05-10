const Filter = (props) =>
{
  return (
    <div>
        filter shown with
        <input value={props.name} onChange={props.handle} />
    </div>
  )
}

export default Filter