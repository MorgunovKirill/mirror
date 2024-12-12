import { ChangeEvent, ComponentPropsWithoutRef, FocusEvent, forwardRef } from 'react'

import Close from '@/assets/components/Close'
import Search from '@/assets/components/Search'
import clsx from 'clsx'

import s from './input.module.scss'

export type InputProps = {
  className?: string
  error?: string
  label?: string
  onClickClear?: () => void
  onValueChange?: (value: string) => void
  type?: 'search' | 'text'
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error,
      label,
      onChange,
      onClickClear,
      onValueChange,
      type = 'text',
      value,
      ...restProps
    }: InputProps,
    ref
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    const focusHandler = (event: FocusEvent<HTMLInputElement, Element>) => {
      // Устанавливает каретку в конец текста
      const length = event.target.value.length

      event.target.setSelectionRange(length, length)
    }

    const classes = {
      button: clsx(s.button, restProps.disabled && s.disabled),
      input: clsx(
        className,
        s.input,
        error && s.error,
        restProps.disabled && s.disabled,
        type === 'search' && s.search
      ),
      label: clsx(s.label, restProps.disabled && s.disabled),
      searchIcon: clsx(s.searchIcon, restProps.disabled && s.disabled),
      wrapper: clsx(s.wrapper, error && s.wrapperError),
    }

    return (
      <label className={classes.label}>
        {label}

        <div className={classes.wrapper}>
          <input
            className={classes.input}
            onChange={handleChange}
            onFocus={focusHandler}
            ref={ref}
            type={type}
            value={value}
            {...restProps}
          />
          {type === 'search' && (
            <>
              <Search className={classes.searchIcon} />
              <button
                className={classes.button}
                disabled={restProps.disabled}
                onClick={onClickClear}
              >
                {value?.length ? <Close /> : ''}
              </button>
            </>
          )}

          {error && <p className={s.errorText}>{error}</p>}
        </div>
      </label>
    )
  }
)
