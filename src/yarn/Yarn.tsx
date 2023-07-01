const STS_PER_INCH = 7.25;
const ROWS_PER_INCH = 10.5;

export function Yarn({ label, magic, area }: { label: string, magic: number, area: number }) {

    return (
        <><h4>{label}</h4><p>{ area * magic }</p></>
    );
}