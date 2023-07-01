
const castOn = (width: number) => Math.round(1.35556 * width + 13.7556);
const shapingRepeat = (width: number) => Math.round(0.411111 * width + 2.53333);
const bodyRows = (length: number) => Math.round(10.6927 * length - 21.1512);
const castOff = (width: number) => Math.round(0.383333 * width + 2.64444);
const sleeveCapBottom = (width: number) => -2;
const sleeveCapTop = (width: number) => -2;
const capRows = (width: number) => Math.round(1.07778 * width + 8.97778);
// const capRows = (width: number) => sleeveCapBottom(width) * 2 + sleeveCapTop(width) + 2;



export function LongSleeveUp({width, length, shelf}: {width: number, length: number, shelf: number}) {
     return (
        <>
            <h3>Long Sleeve, bottom up (Make 2)</h3>
            <ol>
                <li>Cast on {castOn(width)} stitches.</li>
                <li>Knit welt - hem 40 rows or rib 20 rows and change tension.</li>
                <li>Set row counter to 000</li>
                <li>Transfer to stocking stitch and knit 2 rows above welt</li>
                <li>Increase 1 stitch each end of this and every following 8 rows</li>
                <li>Increase {shapingRepeat(width)} times altogether</li>
                <li>There are now {castOn(width) + shapingRepeat(width) * 2} stitches</li>
                <li>Knit straight to {bodyRows(length)} rows above welt</li>
                <li>Row counter 000</li>
                <li>At beginning of next 2 rows cast off {shelf} stitches</li>
                <li>Decrease 1 stitch each end every 2nd row {sleeveCapBottom(width)} times</li>
                <li>Decrease 1 stitch each end every row {sleeveCapTop(width)} times</li>
                <li>There are now {capRows(width)} rows</li>
                <li>Cast off remaining {castOff(width)} stitches</li>
            </ol>
        </>
    );
}

export function LongSleeveDown({width, length, shelf}: {width: number, length: number, shelf: number}) {
    return (
        <>
            <h3>Long Sleeve, top down (Make 2)</h3>
            <p>Since this is knit top-down, you can choose to seam the front and back at the shoulders, and then hang the body back on the machine to knit the sleeves. In this case the "cast on"s and "increases" in steps 1-4 are bringing needles in to action.</p>
            <ol>
                <li>Cast on {castOff(width)} stitches.</li>
                <li>Increase 1 stitch each end every row {sleeveCapTop(width)} times</li>
                <li>Inscrease 1 stitch each end every 2nd row {sleeveCapBottom(width)} times</li>
                <li>At beginning of next 2 rows cast on {shelf} stitches</li>
                <li>There are now {capRows(width)} rows</li>
                <li>Row counter 000</li>
                <li>Knit straight for {bodyRows(length) - (shapingRepeat(width) * 8)} rows</li>
                <li>Decrease 1 stitch each of this and every following 8 rows</li>
                <li>Decrease {shapingRepeat(width)} times altogether</li>
                <li>There are now {castOn(width)} stitches</li>
                <li>Transfer to stocking stitch and knit 2 rows</li>
                <li>Knit welt - hem 40 rows or change tension and rib 20 rows.</li>
                <li>Cast off {castOn(width)} stitches</li>
            </ol>
        </>
    );
}

