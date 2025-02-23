interface IOption {
  value: string,
  label: string
}

interface SelectFieldProps {
  label: string,
  id: string,
  name: string,
  className?: string,
  options: IOption[],
  value: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

function SelectField({ 
  label, 
  id, 
  name, 
  className = 'md:col-span-2', 
  options,
  value,
  onChange
}: SelectFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
        <select id={id} name={name} value={value} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <option>Choose a {label}</option>
          {options.map(item => (
            <option key={item.value} value={item.value}>{item.label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SelectField