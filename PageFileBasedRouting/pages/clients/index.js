import React from 'react'
import Link from 'next/link'
function ClientsPage() {
    const clients=[
        {
            id:"max",name:"Maximum"
        },
        {
            id:"min",name:"Minimum"
        },
    ]
  return (
    <div>
      <h2> This is clients page</h2>
      <ul>
        {clients.map((client)=>(
            <li key={client.id}>
                <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
        ))}
     </ul>
    </div>
  )
}

export default ClientsPage
