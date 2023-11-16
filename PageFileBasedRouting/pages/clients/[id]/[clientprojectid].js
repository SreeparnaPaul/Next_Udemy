import React from 'react'
import { useRouter } from 'next/router'
function SelectedClientProjectPage() {
    const router= useRouter();
    console.log(router.query);
  return (
    <div>
      <h2>This is a selected client project page</h2>
    </div>
  )
}

export default SelectedClientProjectPage
