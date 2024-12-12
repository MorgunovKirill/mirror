export type SortingOptions = 'email' | 'firstName' | 'id' | 'lastName' | 'phone'

export type TableName = {
  flag?: boolean
  key: SortingOptions
  title: string
}

export const itemTableName: TableName[] = [
  {
    key: 'id',
    title: 'ID',
  },
  {
    key: 'firstName',
    title: 'Firstname',
  },
  {
    key: 'lastName',
    title: 'Lastname',
  },
  {
    key: 'email',
    title: 'E-mail',
  },
  {
    flag: true,
    key: 'phone',
    title: 'Phone',
  },
]
