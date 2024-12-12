import { useState } from 'react'

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
  const [sortingStatus, setSortingStatus] = useState<null | string>()

  console.log(sortingStatus)
  const [searchValue, setSearchValue] = useState<string>('all')

  const onSearchValueChange = (value: string) => {
    setSearchValue(value)
  }

  // fetch from server
  const decksData = [
    {
      address: {
        city: 'Waukesha',
        state: 'WI',
        streetAddress: '9792 Mattis Ct',
        zip: '22178',
      },
      description: 'et lacus magna dolor...',
      email: 'DWhalley@in.gov',
      firstName: 'Sue',
      id: 101,
      lastName: 'Corson',
      phone: '(612)211-6296',
    },
    {
      address: {
        city: 'FoozBuzz',
        state: 'WI',
        streetAddress: '9792 Mattis Ct',
        zip: '22178',
      },
      description: 'et lacus magna dolor...',
      email: 'DWhalley@in.gov',
      firstName: 'Sue',
      id: 101,
      lastName: 'Corson',
      phone: '(612)211-6296',
    },
  ]

  // if (itemsAreLoading) {
  //   return <div>Loading ...</div>
  // }

  return (
    <>
      <ItemsFilter searchValue={searchValue} setSearchValue={onSearchValueChange} />
      <ItemsList items={decksData} sortingStatus={setSortingStatus} />
    </>
  )
}

export default ItemsPage
