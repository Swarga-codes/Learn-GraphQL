import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery,gql } from '@apollo/client'
function App() {
  const [count, setCount] = useState(0)
  const query=gql`
  query BookQuery{
    getBooks {
    title
    author
    }
    }
    
  `
const {data,loading}=useQuery(query)
if(loading) return <h1>Loading Data....</h1>
  return (
    <>
      {
        data?.getBooks?.map((book,idx)=>(
          <div key={idx}>
            <h1>{book.title}</h1>
            <p>- written by {book.author}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
