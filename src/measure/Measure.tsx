import { ChangeEvent } from "react";

export function Measure({ label, value, onChange }: { label: string, value: number, onChange: (value: number) => void }) {
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => onChange(Number.parseFloat(e.target.value));

    return (
        <label>{label} <input type="number" min={0.5} step={0.5} onChange={onInputChange} value={value} /></label>
    );
}