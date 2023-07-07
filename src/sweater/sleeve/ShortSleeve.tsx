
const castOn = (width: number) => Math.round(2.17778 * width + 4.82222);
const castOff = (width: number) => Math.round(0.383333 * width + 2.64444);
const capRows = (width: number) => Math.round(1.07778 * width + 8.97778);
const sleeveCapBottom = (width: number, shelf: number) => capRows(width) - (decreaseForCap(width, shelf) / 2);
const sleeveCapTop = (width: number, shelf: number) => decreaseForCap(width, shelf) - capRows(width);
const decreaseForCap = (width: number, shelf: number) => castOn(width) + (7 * 2) - (2 * shelf) - castOff(width);

export function ShortSleeveUp({width, shelf}: {width: number, shelf: number}) {
     return (
        <>
            <h3>Short Sleeve, bottom up (Make 2)</h3>
            <ol>
                <li>Cast on <strong>{castOn(width)}</strong> stitches.</li>
                <li>Knit welt - hem 20 rows or rib 10 rows and change tension.</li>
                <li>Transfer to stocking stitch and knit 2 rows</li>
                <li>Increase 1 stitch each end of this and every following 3 rows</li>
                <li>Increase 7 times altogether</li>
                <li>There are now <strong>{castOn(width) + 7 * 2}</strong> stitches</li>
                <li>Knit straight to 24 rows above welt</li>
                <li>Row counter 000</li>
                <li>At beginning of next 2 rows cast off <strong>{shelf}</strong> stitches</li>
                <li>Decrease 1 stitch each end every 2nd row <strong>{sleeveCapBottom(width, shelf)}</strong> times</li>
                <li>Decrease 1 stitch each end every row <strong>{sleeveCapTop(width, shelf)}</strong> times</li>
                <li>There are now <strong>{capRows(width)}</strong> rows</li>
                <li>Cast off remaining <strong>{castOff(width)}</strong> stitches</li>
            </ol>
        </>
    );
}

export function ShortSleeveDown({width, shelf}: {width: number, shelf: number}) {
    return (
        <>
            <h3>Short Sleeve, top down (Make 2)</h3>
            <p>Since this is knit top-down, you can choose to seam the front and back at the shoulders, and then hang the body back on the machine to knit the sleeves. In this case the "cast on"s and "increases" in steps 1-4 are bringing needles in to action.</p>
            <ol>
                <li>Cast on <strong>{castOff(width)}</strong> stitches.</li>
                <li>Increase 1 stitch each end every row <strong>{sleeveCapTop(width, shelf)}</strong> times</li>
                <li>Inscrease 1 stitch each end every 2nd row <strong>{sleeveCapBottom(width, shelf)}</strong> times</li>
                <li>At beginning of next 2 rows cast on <strong>{shelf}</strong> stitches</li>
                <li>There are now <strong>{capRows(width)}</strong> rows</li>
                <li>Row counter 000</li>
                <li>Knit straight for 24 rows</li>
                <li>Decrease 1 stitch each of this and every following 3 rows</li>
                <li>Decrease 7 times altogether</li>
                <li>There are now <strong>{castOn(width)}</strong> stitches</li>
                <li>Transfer to stocking stitch and knit 2 rows</li>
                <li>Knit welt - add marker and hem 20 rows or change tension and rib 10 rows.</li>
                <li>Cast off <strong>{castOn(width)}</strong> stitches</li>
            </ol>
            <p>If making sewn welt, fold up cast off edge to marker and hem.</p>
        </>
    );
}

