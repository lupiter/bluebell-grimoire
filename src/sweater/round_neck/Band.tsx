
const needles = (width: number) =>  Math.round(2.98889 * width + 20.7333);

export function RoundNeckMock({ width }: { width: number }) {
  return (
    <>
      <h3>Neck Band (Make 1)</h3>
      <p>When attached, neckband is folded in half</p>
      <ol>
        <li>Select <strong>{needles(width)}</strong> needles</li>
        <li>Push out of action every alternate needle</li>
        <li>Using winding method, cast on loosly</li>
        <li>Knit 30 rows</li>
        <li>Cast off loosely</li>
      </ol>
    </>
  )
}

export function RoundNeckRib({ width }: { width: number }) {
  return (
    <>
      <h3>Neck Band (Make 1)</h3>
      <p>When attached, neckband is folded in half</p>
      <ol>
        <li>Cast on <strong>{needles(width)}</strong> stitches for K1, P1 rib</li>
        <li>Rib for 30 rows</li>
        <li>Cast off loosely</li>
      </ol>
    </>
  )
}

export function ScoopNeckHand() {
  return (
    <>
      <h3>Neck Band (hand knit)</h3>
      <p>Seam the garment, and then pick up stitches evenly all around the neck. Knit either rib or garter stitch for 8 rows, and cast off.</p>
    </>
  )
}

export function PoloNeckMock({ width }: {width: number}) {
  return (
    <>
      <h3>Neck Band (Make 1)</h3>
      <ol>
        <li>Select <strong>{needles(width)}</strong> needles</li>
        <li>Push out of action every alternate needle</li>
        <li>Using winding method, cast on loosly</li>
        <li>Knit 70 rows</li>
        <li>Cast off loosely</li>
      </ol>
    </>
  )
}


export function PoloNeckRib({ width }: { width: number }) {
  return (
    <>
      <h3>Neck Band (Make 1)</h3>
      <ol>
        <li>Cast on <strong>{needles(width)}</strong> stitches for K1, P1 rib</li>
        <li>Rib for 70 rows</li>
        <li>Cast off loosely</li>
      </ol>
    </>
  )
}