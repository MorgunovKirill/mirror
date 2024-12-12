import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field'
import clsx from 'clsx'

import s from './itemsFilter.module.scss'

type Props = {
  searchValue: null | string
  setSearchValue: (value: string) => void
}

const ItemsFilter = ({ setSearchValue }: Props) => {
  const { control, setValue } = useForm({
    defaultValues: {
      search: '',
    },
  })

  const onSubmit = () => {
    alert('SEARCH')
  }

  const reset = () => {
    setValue('search', '')
  }

  return (
    <div className={s.container}>
      <label className={s.search}>
        <p className={s.label}>Search by name</p>
        <ControlledTextField
          control={control}
          name={'search'}
          onValueChange={setSearchValue}
          placeholder={'Search...'}
        />
      </label>
      <button className={clsx(s.btn, s.searchBtn)} onClick={onSubmit}>
        <span>Найти</span>
      </button>
      <button className={clsx(s.btn, s.resetBtn)} onClick={reset}>
        <span>Сбросить</span>
      </button>
    </div>
  )
}

export default ItemsFilter
