
const firstPieceNeedles = (width: number) =>  Math.round(3.16667 * width + 36.6429);
const secondPieceNeedles = (width: number) => Math.round(2.11905 * width + 13.5);

export function VNeckMock({ width }: { width: number }) {
  return (
    <>
      <h3>Neck Band (Make 1)</h3>
      <p>When attached, neckband is folded in half</p>
      <h4>Part 1: Back and front left</h4>
      <ol>
        <li>Select <strong>{firstPieceNeedles(width)}</strong> needles</li>
        <li>Push out of action every alternate needle</li>
        <li>Using winding method, cast on loosly</li>
        <li>Knit 24 rows</li>
        <li>Cast off loosely</li>
      </ol>
      <h4>Part 2: Front right</h4>
      <p>Same as above, but select <strong>{secondPieceNeedles(width)}</strong> needles</p>
    </>
  )
}

export function VNeckRib({ width }: { width: number }) {

  return (
    <>
      <h3>Neck Band (Make 1)</h3>
      <h4>Part 1: Back and front left</h4>
      <p>When attaching neckbands it is best to use the cast on edge as the finished edge and attach the cast off edge to the garment</p>
      <ol>
        <li>Cast on <strong>{firstPieceNeedles(width)}</strong> stitches for K1, P1 rib</li>
        <li>Rib for 12 rows</li>
        <li>Cast off loosely</li>
      </ol>
      <h4>Part 2: Front right</h4>
      <p>Same as above, but select <strong>{secondPieceNeedles(width)}</strong> needles</p>
    </>
  )
}