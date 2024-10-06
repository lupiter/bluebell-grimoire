import { Measure } from "../measure/Measure";
import { useState } from "react";
import "./sweater.css";
import { Back } from "./back/Back";
import { VNeckFront } from "./v_neck/VNeckFront";
import { Keyed, Select, SelectString } from "../select/Select";
import { LongSleeveDown, LongSleeveUp } from "./sleeve/LongSleeve";
import { VNeckMock, VNeckRib } from "./v_neck/Band";
import { RoundNeckFront } from "./round_neck/RoundNeckFront";
import { PoloNeckMock, PoloNeckRib, RoundNeckMock, RoundNeckRib, ScoopNeckHand } from "./round_neck/Band";
import { ShortSleeveDown, ShortSleeveUp } from "./sleeve/ShortSleeve";
import { RoundNeckCardigan } from "./round_neck/RoundNeckCardigan";
import { VNeckCardigan } from "./v_neck/VNeckCardigan";

enum NeckStyle {
  V = "V-neck",
  Round = "Round",
  Polo = "Polo",
  Scoop = "Scoop",
};

const NECK_STYLES = [NeckStyle.V, NeckStyle.Round, NeckStyle.Scoop, NeckStyle.Polo];

enum NeckBandStyle {
  Mock = "Mock Rib",
  Rib = "Ribber"
}

const NECK_BAND_STYLES = [NeckBandStyle.Mock, NeckBandStyle.Rib];

enum Style {
  Cardigan = "Cardigan",
  Pullover = "Pullover",
}

const STYLES = [Style.Pullover, Style.Cardigan];

enum SleeveStyle {
  ShortBottomUp = "Short, bottom up",
  ShortTopDown = "Short, top down",
  LongBottomUp = "Long, bottom up",
  LongTopDown = "Long, top down"
}

const SLEEVE_STYLES = [SleeveStyle.LongBottomUp, SleeveStyle.ShortBottomUp, SleeveStyle.LongTopDown, SleeveStyle.ShortTopDown]

class PresetSize implements Keyed {
  constructor(public key: string, public label: string, public width: number, public length: number, public sleeveLength: number) { }
}

const PRESET_SIZES = [
  new PresetSize("22", "22", 24, 13.5, 11),
  new PresetSize("25", "25", 27, 15.5, 13),
  new PresetSize("28", "28", 30, 17.5, 15),
  new PresetSize("31", "31", 33, 19.5, 16),
  new PresetSize("34", "34", 36, 23.5, 17),
  new PresetSize("37", "37", 39, 24, 17),
  new PresetSize("40", "40", 42, 24.5, 17),
  new PresetSize("43", "43", 45, 26, 18),
  new PresetSize("46", "46", 48, 26.5, 18),
];

export function Sweater() {
  const [width, setWidth] = useState(42);
  const [length, setLength] = useState(24.5);
  const [sleeveLength, setSleeveLength] = useState(17);
  const sleeveHeight = () => (5.5667 * (width - 21) / 3 + 54.611) / 10.5;
  const yarnOz = () => 0.0136 * (width * length + sleeveLength * sleeveHeight());
  const yarnBalls = () => Math.ceil(yarnOz() * 28.35 / 50);

  const [style, setStyle] = useState(Style.Pullover);
  const [neck, setNeck] = useState(NeckStyle.V);
  const [sleeve, setSleeve] = useState(SleeveStyle.LongBottomUp)
  const [neckBand, setNeckBand] = useState(NeckBandStyle.Mock)

  const shelf = () => Math.max(4, Math.round(0.233333 * width - 4.2));

  const setSize = (value?: PresetSize) => {
    if (value) {
      setWidth(value.width)
      setLength(value.length)
      setSleeveLength(value.sleeveLength)
    }
  };

  return (
    <div>
      <h2>Sweaters</h2>
      <p>These patterns are all in inches. They also have no built-in ease — the measurements are the garment measurements — so if you'd like a fit that isn't skin-tight, add a bit to your body measurements. The original patterns recommend 2 inches, which is reflected in the preset sizes.</p>
      <p><em>Tension:</em> 14.5 sts and 21 rows to 2 inches</p>

      <form>
        <Select label="Preset Sizes" showNone={true} onChange={setSize} values={PRESET_SIZES}></Select>
        <fieldset>
          <legend>Garment Size</legend>
          <Measure label="Width (chest)" value={width} onChange={setWidth} />
          <Measure label="Length" value={length} onChange={setLength} />
          <Measure label="Sleeve Length" value={sleeveLength} onChange={setSleeveLength} />
        </fieldset>
        <fieldset>
          <legend>Style</legend>
          <SelectString label="Style" onChange={v => setStyle(v as Style)} values={STYLES} />
          <SelectString label="Neck" onChange={v => setNeck(v as NeckStyle)} values={NECK_STYLES} />
          <SelectString label="Sleeve" onChange={v => setSleeve(v as SleeveStyle)} values={SLEEVE_STYLES} />
          <SelectString label="Neck Band" onChange={v => setNeckBand(v as NeckBandStyle)} values={NECK_BAND_STYLES} />
        </fieldset>
      </form>

      <table>
        <thead>
          <tr><th colSpan={2}>Yarn</th></tr>
        </thead>
        <tbody>
          <tr><th>Ounces</th><td>{Math.ceil(yarnOz())}</td></tr>
          <tr><th>50g Balls</th><td>{yarnBalls()}</td></tr>
        </tbody>
      </table>

      <Back width={width} length={length} shelf={shelf()} />
      {style === Style.Pullover && neck === NeckStyle.V && <VNeckFront width={width} length={length} shelf={shelf()} />}
      {style === Style.Pullover && neck !== NeckStyle.V && <RoundNeckFront width={width} length={length} shelf={shelf()} scoop={neck === NeckStyle.Scoop} />}

      {style === Style.Cardigan && neck === NeckStyle.V && <VNeckCardigan width={width} length={length} shelf={shelf()} />}
      {style === Style.Cardigan && neck !== NeckStyle.V && <RoundNeckCardigan width={width} length={length} shelf={shelf()} scoop={neck === NeckStyle.Scoop} />}

      {sleeve === SleeveStyle.LongBottomUp && <LongSleeveUp width={width} length={sleeveLength} shelf={shelf()} />}
      {sleeve === SleeveStyle.LongTopDown && <LongSleeveDown width={width} length={sleeveLength} shelf={shelf()} />}
      {sleeve === SleeveStyle.ShortBottomUp && <ShortSleeveUp width={width} shelf={shelf()} />}
      {sleeve === SleeveStyle.ShortTopDown && <ShortSleeveDown width={width} shelf={shelf()} />}

      {neckBand === NeckBandStyle.Mock && neck === NeckStyle.V && style === Style.Pullover && <VNeckMock width={width} />}
      {neckBand === NeckBandStyle.Rib && neck === NeckStyle.V && style === Style.Pullover && <VNeckRib width={width} />}
      {neckBand === NeckBandStyle.Mock && neck === NeckStyle.Round && style === Style.Pullover && <RoundNeckMock width={width} />}
      {neckBand === NeckBandStyle.Rib && neck === NeckStyle.Round && style === Style.Pullover && <RoundNeckRib width={width} />}
      {neckBand === NeckBandStyle.Mock && neck === NeckStyle.Polo && style === Style.Pullover && <PoloNeckMock width={width} />}
      {neckBand === NeckBandStyle.Rib && neck === NeckStyle.Polo && style === Style.Pullover && <PoloNeckRib width={width} />}
      {neck === NeckStyle.Scoop && <ScoopNeckHand />}

    </div>
  );
}