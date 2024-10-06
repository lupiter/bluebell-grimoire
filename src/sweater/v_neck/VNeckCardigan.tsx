
export function VNeckCardigan({width, length, shelf}: {width: number, length: number, shelf: number}) {
    const castOn = Math.round(1.87778 * width - 2.7);
    const bodyRows = Math.round(6.99909 * length - 31.8692);

    const armShapeTop = Math.round(0.394444 * width - 6.42222);
    const neckShape = Math.round(0.422222 * width + 2.48889);

    const widthAfterShaping = Math.round(0.766667 * width + 0.855556);
    const armShapeBottom =  castOn - widthAfterShaping - armShapeTop - shelf - 1 - neckShape;
    const sleeveRows = Math.round(1.85556 * width + 15.6444);

    // Back

    const backShoulderRows = Math.round(0.255556 * width - 1.2);
    const backWidthAfterShaping = 2 * (castOn - (neckShape + shelf + armShapeBottom + armShapeTop));
    const backFinalCastOff = Math.round(0.844444 * width + 7.48889);

    const shoulderStitches = Math.round((backWidthAfterShaping - backFinalCastOff) / backShoulderRows);
    const shoulderRows = Math.ceil(widthAfterShaping / shoulderStitches);

    return (
        <>
            <h3>V-Neck Front</h3>
            <p>Make 2 total, 2nd is mirrored</p>
            <ol>
                <li>Cast on <strong>{castOn}</strong> stitches.</li>
                <li>Knit welt - hem 40 rows or rib 20 rows and change tension.</li>
                <li>Transfer to stocking stitch and knit <strong>{bodyRows}</strong> above welt</li>
                <li>Reset row counter to 000</li>
                <li>At armhole edge cast off <strong>{shelf}</strong> stitches</li>

                <li>At neck edge, decrease 1 stitch</li>

                <em>At the same time do steps 7, 8 & 9...</em>
                <li>At neck edge decrease 1 stitch every 4th row <strong>{neckShape}</strong> times</li>
                <li>At armhole edge decrease 1 stitch every row <strong>{armShapeBottom}</strong> times</li>
                <li>At armhole edge decrease 1 stitch each end every 2nd row <strong>{armShapeTop}</strong> times</li>
                <li>There are now <strong>{widthAfterShaping}</strong> stitches</li>
                <li>Knit straight to <strong>{sleeveRows}</strong> rows</li>
                <li>At beginning of every 2nd row, at armhole edge cast off <strong>{shoulderStitches}</strong> stitches, <strong>{shoulderRows}</strong> times</li>
                <li>Knit other front, reversing shapings.</li>
            </ol>
        </>
    );
}