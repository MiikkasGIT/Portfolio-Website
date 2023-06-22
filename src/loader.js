import React from 'react'

const loader = () => {
    
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }
      ,1000)
    },[]
    )
  return (
    <div className='Loader'>
    <ClipLoader color="#04AA6D" loading={loading} size={150} />
    </div>
  )
}

export default loader