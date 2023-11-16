import React from 'react'
import { useRouter } from 'next/router'
function ClientProjectPage() {
    const router= useRouter();
    function loadProjectHandler(){
        router.push({
            pathname:"/clients/[id]/[clientprojectid]",
            query:{id:"max",clientprojectid:"projecta"}
            })
    }
  return (
    <div>
      <h2>This is a project of a given client</h2>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}

export default ClientProjectPage
