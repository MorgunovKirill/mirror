import { useEffect, useState } from 'react'

import { Table, TableHeader } from '@/components/ui/table'
import { itemTableName } from '@/components/ui/table/tableHeader/tableHeaderName'
import { ItemsRow } from '@/features/table/ui/itemsList/itemsRow/itemsRow'
import { ItemType } from '@/features/table/ui/itemsPage'
import clsx from 'clsx'

import s from './itemsList.module.scss'

type Props = {
  className?: string
  items: ItemType[] | undefined
}

export type SortingOptions = 'email' | 'firstName' | 'id' | 'lastName'

export type SortType = {
  name: SortingOptions
  value: string
}

export const ItemsList = ({ className, items }: Props) => {
  const [sortedItems, setSortedItems] = useState<Array<ItemType> | undefined>(undefined)
  const [sortingStatus, setSortingStatus] = useState<SortType | null>({ name: 'id', value: 'asc' })

  const sortItems = () => {
    if (!items) {
      return
    }
    if (sortingStatus) {
      const sorted = [...items].sort((a, b) => {
        const valA = a[sortingStatus.name] ?? ''
        const valB = b[sortingStatus.name] ?? ''

        if (valA < valB) {
          return sortingStatus.value === 'asc' ? -1 : 1
        }
        if (valA > valB) {
          return sortingStatus.value === 'asc' ? 1 : -1
        }

        return 0
      })

      setSortedItems(sorted)
    } else {
      const sortedItems = [...items].sort((a, b) => a.id - b.id)

      setSortedItems(sortedItems)
    }
  }

  useEffect(() => {
    sortItems()
  }, [sortingStatus, items])

  if (!items) {
    return <Table.Empty>There is no any data...</Table.Empty>
  }

  return (
    <Table.Root className={clsx(className, s.tableRoot)}>
      <TableHeader item={itemTableName} setSortingStatus={setSortingStatus} />
      <Table.Body>{sortedItems?.map(el => <ItemsRow item={el} key={el.id} />)}</Table.Body>
    </Table.Root>
  )
}
