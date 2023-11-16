import { getFeaturedEvents } from "@/data/dummy-data"


export default function Home() {
  const featuredEvents=getFeaturedEvents()
  return (
    <div>
     <h2>This is Home Page</h2>
    </div>
  )
}
