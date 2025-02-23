interface TextFieldProps {
  label?: string,
  name: string,
  id: string,
  value: string,
  className?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function TextField({ 
  label = 'Default Label', 
  name, 
  id, 
  className = 'md:col-span-5',
  value,
  onChange
}: TextFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name} >{label}</label>
      <input 
        type="text" 
        name={name} 
        id={id} 
        value={value}
        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
        onChange={onChange}
      />
    </div>
  )
}

export default TextField