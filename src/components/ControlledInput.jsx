export default function ControlledInput({ value, onChange, required=''})
{
  return <input type="text" value={value} onChange={onChange} required={required}/>;
}
