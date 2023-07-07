

export function RoundNeckFront({width, length, shelf, scoop = false}: {width: number, length: number, shelf: number, scoop: boolean}) {
    const castOn = Math.round(3.75556 * width - 3.97778);
    const bodyRows = Math.round(7.52407 * length - 39.7039);
    const armShapeBottom = Math.round(0.166667 * width - 1.22222);
    const armShapeTop = Math.round(0.394444 * width - 6.42222);
    const widthAfterShaping = castOn - 2 * (shelf + armShapeBottom + armShapeTop);
    const sleeveRows = scoop ? Math.round(1.23333 * width + 11.6) / 2 : Math.round(1.23333 * width + 11.6);

    const frontHalf = Math.round(0.994444 * width + 1.97778);
    const neckDecrease = Math.round(0.227778 * width + 0.355556);
    const stitchesAfterNeck = frontHalf - neckDecrease;
    const endNeckShaping = Math.round(1.85556 * width + 15.6444);
    const armholeShapingRepeats = Math.round(0.127778 * width - 0.6);
    const armholeShapingStitches = Math.round(stitchesAfterNeck / armholeShapingRepeats);
    const finalCastOff = widthAfterShaping - frontHalf * 2;


    return (
        <>
            <h3>Round Neck Front (Make 1)</h3>
            <ol>
                <li>Cast on <strong>{castOn}</strong> stitches.</li>
                <li>Knit welt - hem 40 rows or rib 20 rows and change tension.</li>
                <li>Transfer to stocking stitch and knit <strong>{bodyRows}</strong> above welt</li>
                <li>Reset row counter to 000</li>
                <li>Cast off <strong>{shelf}</strong> stitches at beinning of next 2 rows</li>
                <li>Decrease 1 stitch each end every row <strong>{armShapeBottom}</strong> times</li>
                <li>Decrease 1 stitch each end every 2nd row <strong>{armShapeTop}</strong> times</li>
                <li>There are now <strong>{widthAfterShaping}</strong> stitches</li>
                <li>Knit straight to <strong>{sleeveRows}</strong> rows</li>
                <li>Work <strong>{frontHalf}</strong> stitches neartest carriage holding remaining stitches</li>
                <em>Shape neck</em>
                <li>At neck edge decrease 1 stitch every second row <strong>{neckDecrease}</strong> times</li>
                <li>There are now <strong>{stitchesAfterNeck}</strong> stitches</li>
                <li>Knit straight to <strong>{endNeckShaping}</strong> rows</li>
                <em>Shape shoulder</em>
                <li>At beginning of every 2nd row, at armhole edge, decrease <strong>{armholeShapingStitches}</strong> stitches <strong>{armholeShapingRepeats}</strong> times</li>
                <li>Cast off <strong>{finalCastOff}</strong> stitches at centre</li>
                <li>Work other half, reversing shaping</li>
            </ol>
        </>
    );
}