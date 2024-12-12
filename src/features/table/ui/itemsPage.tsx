import { useEffect, useState } from 'react'

import { getData } from '@/app/api/api'
import ItemsFilter from '@/features/table/ui/itemsFilter/itemsFilter'
import { ItemsList } from '@/features/table/ui/itemsList/itemsList'

export type AddressType = {
  city: string
  state: string
  streetAddress: string
  zip: string
}

export type ItemType = {
  address: AddressType
  description: string
  email: string
  firstName: string
  id: number
  lastName: string
  phone: string
}

const ItemsPage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchValue, setSearchValue] = useState<string>('all')

  useEffect(() => {
    getData()
      .then(response => {
        setData(response.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: {error}</p>
  }

  const onSearchValueChange = (value: string) => {
    setSearchValue(value)
  }

  return (
    <>
      <ItemsFilter searchValue={searchValue} setSearchValue={onSearchValueChange} />
      <ItemsList items={data} />
    </>
  )
}

export default ItemsPage
