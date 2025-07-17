'use client';
import { list } from "postcss";
import { useEffect, useState } from "react";

type User = {
  id: string,
  name: string,
  price: number,
}



export default function Page() {

  const [users, setUser] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editPrice, setEditPrice] = useState('')
  const [editName, setEditName] = useState('');
  const [editId, setEditId] = useState('');


  async function showAPI() {
    const raw = await fetch('/api/users');
    const data = await raw.json();
    console.log(data);
    setUser(data);
  }

  useEffect(() => {
    showAPI()
  }, [])

  async function handleAddUser() {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price: Number(price) }),
    });

    showAPI();
    setName('');
    setPrice('');
  }

  async function handleUpdateUser(id: string) {
    const res = await fetch('/api/users', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name: editName, price: Number(editPrice) }),
    })

    setPrice('')
    setEditId('')
    setEditName('');
    showAPI();
  }

  async function handleDeleteUser(id: string) {
    const res = await fetch('/api/users', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })

    showAPI();
  }



  return (
    <main>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-6 bg-gray-100 p-4 rounded shadow-sm">
        <h2 className="text-xl font-bold mb-4">Tambahkan Produk</h2>
        <input
          type="text"
          placeholder="Add New Data"
          className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/3"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        />
        <input
          type="number"

          className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/3"
          value={price}
          onChange={(e) => { setPrice(e.target.value) }}

        />
        <button
          onClick={handleAddUser}
          className="bg-green-500 text-white px-3 py-1 rounded mr-2"
        >
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        <h2 className="text-xl font-bold my-6">Daftar Produk</h2>
        <table className="w-full border-collapse shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left border-b border-gray-300 font-semibold text-gray-700">No.</th>
              <th className="p-3 text-left border-b border-gray-300 font-semibold text-gray-700">Name</th>
              <th className="p-3 text-left border-b border-gray-300 font-semibold text-gray-700">Price</th>
              <th className="p-3 text-left border-b border-gray-300 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user: User, index) => {
              return (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="p-3 border-b border-gray-200">{index + 1}</td>
                  {editId === user.id ? (
                    <>
                      <td className="p-3 border-b border-gray-200">
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className='w-44 border px-2 py-1 mr-2'
                        />
                      </td>
                      <td className="p-3 border-b border-gray-200">
                        <input
                          type="number"
                          value={editPrice}
                          onChange={(e) => setEditPrice(e.target.value)}
                          className='w-44 border px-2 py-1 mr-2'
                        />
                      </td>
                      <td className="p-3 border-b border-gray-200">
                        <button
                          className='bg-green-500 text-white px-3 py-1 rounded mr-2'
                          onClick={() => { handleUpdateUser(editId) }}
                        >
                          Save
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-3 border-b border-gray-200">
                        <span>{user.name}</span>
                      </td>
                      <td className="p-3 border-b border-gray-200">
                        {/*<span>{typeof user.price === 'number' ? `Rp.${user.price.toLocaleString("id-ID")}` : "Loading"}</span>*/}
                        <span>{`Rp. ${user.price.toLocaleString("id-ID")}`}</span>

                      </td>
                      <td className="p-3 border-b border-gray-200">
                        <button onClick={() => {
                          setEditId(user.id)
                          setEditName(user.name)
                          setEditPrice(user.price.toString())
                        }}
                          className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => { handleDeleteUser(user.id) }}
                          className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                        >
                          Delete
                        </button>
                      </td>


                    </>
                  )}

                </tr>
              )
            })}


          </tbody>
        </table>
        {/* <ul>
          {users.map((user: User, index) => (
            <li key={user.id} >
              {editId === user.id ? (
                <>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className='border px-2 py-1 mr-2'
                  />
                  <button
                    className='bg-green-500 text-white px-3 py-1 rounded mr-2'
                    onClick={() => { handleUpdateUser(editId) }}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>{user.name ? user.name : "Loading"}</span>
                  <button onClick={() => {
                    setEditId(user.id)
                    setEditName(user.name)
                  }}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => { handleDeleteUser(user.id) }}
                    className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>*/}
      </div>
    </main>

  )
}
