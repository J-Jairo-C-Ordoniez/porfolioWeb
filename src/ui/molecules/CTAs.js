import BtnBackdrop from "../atoms/BtnBackdrop";
import BtnLinear from "../atoms/BtnLinear";
import Icon from "../atoms/Icon";

export default function CTAs({ ctas }) {
    const cta = ctas.map((cta) => (
        cta.type === "linear"
            ? <BtnLinear key={cta.id} href={cta.href}>
                <Icon name={cta.icon} />
                <p>{cta.text}</p>
            </BtnLinear>
            : <BtnBackdrop key={cta.id} href={cta.href}>
                <p>{cta.text}</p>
                <Icon name={cta.icon} />
            </BtnBackdrop>
    ))

    return (
        <div className="flex gap-10">
            {cta}
        </div>
    )
}