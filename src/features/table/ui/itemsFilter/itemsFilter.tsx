import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field'
import clsx from 'clsx'

import s from './itemsFilter.module.scss'

type Props = {
  onSearchReset: () => void
  onSearchSubmit: () => void
  searchValue: null | string
  setSearchValue: (value: string) => void
}

const ItemsFilter = ({ onSearchReset, onSearchSubmit, searchValue, setSearchValue }: Props) => {
  const { control, setValue } = useForm({
    defaultValues: {
      search: '',
    },
  })

  const reset = () => {
    setValue('search', '')
    onSearchReset()
  }

  return (
    <div className={s.container}>
      <label className={s.search}>
        <p className={s.label}>Search</p>
        <ControlledTextField
          control={control}
          name={'search'}
          onValueChange={setSearchValue}
          placeholder={'Search...'}
        />
      </label>
      <button className={clsx(s.btn, s.searchBtn)} disabled={!searchValue} onClick={onSearchSubmit}>
        <span>Найти</span>
      </button>
      <button className={clsx(s.btn, s.resetBtn)} disabled={searchValue === ''} onClick={reset}>
        <span>Сбросить</span>
      </button>
    </div>
  )
}

export default ItemsFilter
