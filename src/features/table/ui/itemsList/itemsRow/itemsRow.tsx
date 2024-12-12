import { Table } from '@/components/ui/table'
import { ItemType } from '@/features/table/ui/itemsPage'

// import s from './itemsRow.module.scss'

type Props = {
  item: ItemType
}

export const ItemsRow = ({ item }: Props) => {
  return (
    <Table.Row>
      <Table.Cell>
        <h3>{item.id}</h3>
      </Table.Cell>
      <Table.Cell>{item.firstName}</Table.Cell>
      <Table.Cell>{item.lastName}</Table.Cell>
      <Table.Cell>{item.email}</Table.Cell>
      <Table.Cell>{item.phone}</Table.Cell>
    </Table.Row>
  )
}
