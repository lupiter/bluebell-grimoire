
export function VNeckFront({width, length, shelf}: {width: number, length: number, shelf: number}) {
    const castOn = Math.round(3.75556 * width - 3.97778);
    const bodyRows = Math.round(7.52407 * length - 39.7039);
    const sideStitchesCount = Math.round((castOn - shelf * 2 - 3) / 2);

    const armShapeBottom = Math.round(0.166667 * width - 1.22222);
    const armShapeTop = Math.round(0.394444 * width - 6.42222);
    const neckShape = Math.round(0.422222 * width + 3.24444);

    const widthAfterShaping = sideStitchesCount - (armShapeBottom + armShapeTop + neckShape);
    const sleeveRows = Math.round(1.85556 * width + 15.6444);

    // Back

    const backShoulderRows = Math.round(0.255556 * width - 1.2);
    const backWidthAfterShaping = castOn - 2 * (shelf + armShapeBottom + armShapeTop);
    const backFinalCastOff = Math.round(0.844444 * width + 7.48889);

    const shoulderStitches = Math.round((backWidthAfterShaping - backFinalCastOff) / backShoulderRows);
    const shoulderRows = Math.ceil(widthAfterShaping / shoulderStitches);

    return (
        <>
            <h3>V-Neck Front (Make 1)</h3>
            <ol>
                <li>Cast on <strong>{castOn}</strong> stitches.</li>
                <li>Knit welt - hem 40 rows or rib 20 rows and change tension.</li>
                <li>Transfer to stocking stitch and knit <strong>{bodyRows}</strong> above welt</li>
                <li>Reset row counter to 000</li>
                <li>Cast off <strong>{shelf}</strong> stitches at beinning of next 2 rows</li>

                <li>Decrease 1 stitch each end of work and K2 together at centre.</li>
                <li>Work on half the stitches nearest carriage, placing other half out of action, <strong>{sideStitchesCount}</strong> stitches</li>

                <em>At the same time do steps 8, 9 & 10...</em>
                <li>At armhole edge decrease 1 stitch every row <strong>{armShapeBottom}</strong> times</li>
                <li>At armhole edge decrease 1 stitch each end every 2nd row <strong>{armShapeTop}</strong> times</li>
                <li>At neck edge decrease 1 stitch every 4th row <strong>{neckShape}</strong> times</li>
                <li>There are now <strong>{widthAfterShaping}</strong> stitches</li>
                <li>Knit straight to <strong>{sleeveRows}</strong> rows</li>
                <li>At beginning of every 2nd row, at armhole edge cast off <strong>{shoulderStitches}</strong> stitches, <strong>{shoulderRows}</strong> times</li>
                <li>Work on other half, reversing shapings.</li>
            </ol>
        </>
    );
}