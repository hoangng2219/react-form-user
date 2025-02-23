import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import SelectField from "./components/SelectField"
import TextField from "./components/TextField"

interface IUser {
  full_name: string,
  email: string,
  address: string,
  city: string,
  state: string,
  country: string,
  zipcode: string,
  id: number
}

const defaultForm = {
  full_name: '',
  email: '',
  address: '',
  city: '',
  state: '',
  country: '',
  zipcode: ''
}

function App() {
  const [users, setUsers] = React.useState<IUser[]>([])
  const [form, setForm] = React.useState(defaultForm)

  const handleSubmit = () => {
    const user = {
      id: Date.now(),
      full_name: form.full_name,
      email: form.email,
      address: form.address,
      city: form.city,
      state: form.state,
      country: form.country,
      zipcode: form.zipcode
    }
    setUsers(prevState => {
      return [...prevState, user]
    })
    setForm(defaultForm);

    setTimeout(() => {
      toast.success('Add Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: 'success'
      });
    }, 500)
  }

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  const handleDeleteUser = (userId: number) => {
    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);

    setTimeout(() => {
      toast.success('Delete Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: 'error'
      });
    }, 500)
  }

  return (
    <>
      <ToastContainer />
    
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">Responsive Form</h2>
            <p className="text-gray-500 mb-6">Form is mobile responsive. Give it a try.</p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <TextField 
                      label="Full Name"
                      name="full_name"
                      id="full_name"
                      value={form.full_name}
                      onChange={onChangeField}
                    />

                    <TextField 
                      label="Email Address"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={onChangeField}
                    />

                    <TextField 
                      label="Address / Street"
                      name="address"
                      id="address"
                      value={form.address}
                      className="md:col-span-3"
                      onChange={onChangeField}
                    />

                    <TextField 
                      label="City"
                      name="city"
                      id="city"
                      value={form.city}
                      className="md:col-span-2"
                      onChange={onChangeField}
                    />

                    <SelectField 
                      label="Country / region"
                      name="country"
                      id="countries"
                      options={[
                        { label: 'United States', value: 'US' },
                        { label: 'Canada', value: 'CA' },
                        { label: 'France', value: 'FR' }
                      ]}
                      value={form.country}
                      onChange={onChangeField}
                    />

                    <SelectField 
                      label="State / province"
                      name="state"
                      id="state"
                      options={[
                        { label: 'Phu Nhuan', value: 'Phu Nhuan' },
                        { label: 'Binh Thanh', value: 'Binh Thanh' },
                        { label: 'Go Vap', value: 'Go Vap' }
                      ]}
                      value={form.state}
                      onChange={onChangeField}
                    />

                    <TextField 
                      label="Zipcode"
                      name="zipcode"
                      id="zipcode"
                      value={form.zipcode}
                      className="md:col-span-1"
                      onChange={onChangeField}
                    />

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button 
                          type="button"
                          onClick={handleSubmit}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                      Full Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      City
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Country
                    </th>
                    <th scope="col" className="px-6 py-3">
                      State
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Zipcode
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="bg-white border-b border-gray-200">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {user.full_name}
                    </th>
                    <td className="px-6 py-4">
                      {user.email}
                    </td>
                    <td className="px-6 py-4">
                      {user.address}
                    </td>
                    <td className="px-6 py-4">
                      {user.city}
                    </td>
                    <td className="px-6 py-4">
                      {user.country}
                    </td>
                    <td className="px-6 py-4">
                      {user.state}
                    </td>
                    <td className="px-6 py-4">
                      {user.zipcode}
                    </td>
                    <td className="px-6 py-4">
                    <button 
                      type="button" 
                      className="px-3 py-2 text-xs font-medium focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                      </button>
                    </td>
                  </tr>
                ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
