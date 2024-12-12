import { Table, TableHeader } from '@/components/ui/table'
import { itemTableName } from '@/components/ui/table/tableHeader/tableHeaderName'
import { ItemsRow } from '@/features/table/ui/itemsList/itemsRow/itemsRow'
import { ItemType } from '@/features/table/ui/itemsPage'
import clsx from 'clsx'

import s from './itemsList.module.scss'

type Props = {
  className?: string
  items: ItemType[] | undefined
  sortingStatus: (status: null | string) => void
}

export const ItemsList = ({ className, items, sortingStatus }: Props) => {
  if (!items) {
    return <Table.Empty>There is no any data...</Table.Empty>
  }

  return (
    <Table.Root className={clsx(className, s.tableRoot)}>
      <TableHeader item={itemTableName} sortingStatus={sortingStatus} />
      <Table.Body>
        {items.map(el => (
          <ItemsRow item={el} key={el.id} />
        ))}
      </Table.Body>
    </Table.Root>
  )
}
