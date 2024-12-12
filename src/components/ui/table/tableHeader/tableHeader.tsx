import { useState } from 'react'

import SvgArrowUp from '@/assets/components/ArrowUp'
import { Table } from '@/components/ui/table/table'
import { SortType, SortingOptions } from '@/features/table/ui/itemsList/itemsList'
import clsx from 'clsx'

import s from './tableHeader.module.scss'

type TableName = {
  flag?: boolean
  key: SortingOptions
  title: string
}

type Props = {
  item: TableName[]
  setSortingStatus: (status: SortType | null) => void
}

export const TableHeader = ({ item, setSortingStatus }: Props) => {
  const [sort, setSort] = useState<null | string>('asc')
  const [name, setName] = useState<string>()

  const sorting = (name: SortingOptions) => {
    setName(name)
    if (sort === 'asc' || sort === 'desc') {
      if (sort === 'desc') {
        setSort(null)
        setSortingStatus({ name, value: 'desc' })
      } else if (sort === 'asc') {
        setSort('desc')
        setSortingStatus({ name, value: 'asc' })
      }
    }
    if (sort === null) {
      setSort('asc')
      setSortingStatus(sort)
    }
  }

  return (
    <Table.Head>
      <Table.Row>
        {item.map(el => (
          <Table.HeaderCell
            className={el.flag ? s.disabled : ''}
            key={el.key}
            onClick={() => sorting(el.key)}
          >
            {el.title}

            {name === el.key && sort !== 'asc' ? (
              <SvgArrowUp className={clsx(s.arrow, sort === 'desc' ? s.arrowDown : '')} />
            ) : (
              ''
            )}
          </Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Head>
  )
}
