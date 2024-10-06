import { ChangeEvent } from "react";

export interface Keyed {
  key: string;
  label: string;
}

const NONE_VALUE = "xxxNonexxx";

export function Select<T extends Keyed>({ label, values, onChange, showNone = false }: { label: string, values: T[], onChange: (value?: T) => void, showNone?: boolean }) {

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === NONE_VALUE) {
      onChange();
      return;
    }
    const selected = values.find(value => value.key === e.target.value);
    if (selected) {
      onChange(selected);
    }
  };

  return (
    <label>{label}&nbsp;
      <select onChange={onSelectChange}>
        {showNone && <option value={NONE_VALUE} key={NONE_VALUE}>None</option>}
        {values.map(value => (
          <option value={value.key} key={value.key}>{value.label}</option>
        ))}
      </select>
    </label>
  )
}

export function SelectString({ label, values, onChange, showNone = false }: { label: string, values: string[], onChange: (value?: string) => void, showNone?: boolean }) {
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === NONE_VALUE) {
      onChange();
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <label>{label}&nbsp;
      <select onChange={onSelectChange}>
        {showNone && <option value={NONE_VALUE} key={NONE_VALUE}>None</option>}
        {values.map(value => (
          <option value={value} key={value}>{value}</option>
        ))}
      </select>
    </label>
  )
}

export function SelectInt({ label, values, onChange, showNone = false }: { label: string, values: number[], onChange: (value?: number) => void, showNone?: boolean }) {
  const onSelectChange = (value?: string) => {
    onChange(value ? Number.parseInt(value) : undefined);
  };

  return (
    <SelectString label={label} values={values.map(v => v.toString())} onChange={onSelectChange} showNone={showNone} />
  )
}
export function SelectFloat({ label, values, onChange, showNone = false }: { label: string, values: number[], onChange: (value?: number) => void, showNone?: boolean }) {
  const onSelectChange = (value?: string) => {
    onChange(value ? Number.parseFloat(value) : undefined);
  };

  return (
    <SelectString label={label} values={values.map(v => v.toString())} onChange={onSelectChange} showNone={showNone} />
  )
}