
export function Back({width, length, shelf}: {width: number, length: number, shelf: number}) {
    const castOn = () => Math.round(3.75556 * width - 3.97778);
    const bodyRows = () => Math.round(7.52407 * length - 39.7039);
    const armShapeBottom = () => Math.round(0.166667 * width - 1.22222);
    const armShapeTop = () => Math.round(0.394444 * width - 6.42222);
    const widthAfterShaping = () => castOn() - 2 * (shelf + armShapeBottom() + armShapeTop());
    const sleeveRows = () => Math.round(1.85556 * width + 15.6444);
    const shoulderRows = () => Math.round(0.255556 * width - 1.2);
    const shoulderStitches = () => Math.round((widthAfterShaping() - finalCastOff()) / shoulderRows());
    const finalCastOff = () => Math.round(0.844444 * width + 7.48889);

    return (
        <>
            <h3>Back (Make 1)</h3>
            <ol>
                <li>Cast on <strong>{castOn()}</strong> stitches.</li>
                <li>Knit welt - hem 40 rows or rib 20 rows and change tension.</li>
                <li>Transfer to stocking stitch and knit <strong>{bodyRows()}</strong> above welt</li>
                <li>Reset row counter to 000</li>
                <li>Cast off <strong>{shelf}</strong> stitches at beinning of next 2 rows</li>
                <li>Decrease 1 stitch each end every row <strong>{armShapeBottom()}</strong> times</li>
                <li>Decrease 1 stitch each end every 2nd row <strong>{armShapeTop()}</strong> times</li>
                <li>There are now <strong>{widthAfterShaping()}</strong> stitches</li>
                <li>Knit straight to <strong>{sleeveRows()}</strong> rows</li>
                <li>At beginning of next <strong>{shoulderRows()}</strong> rows cast off <strong>{shoulderStitches()}</strong> stitches</li>
                <li>Cast off remaining <strong>{finalCastOff()}</strong> stitches</li>
            </ol>
        </>
    );
}