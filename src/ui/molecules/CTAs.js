import BtnBackdrop from "../atoms/BtnBackdrop";
import BtnLinear from "../atoms/BtnLinear";
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";

export default function CTAs({ ctas }) {
    const cta = ctas.map((cta) => (
        cta.type === "linear"
            ? <BtnLinear key={cta.id} href={cta.href}>
                <Text
                    text={cta.text}
                    color="#b3b3b3"
                    fontSize="1rem"
                />

                <div className="bg-[#262626] p-2 rounded-full text-[#b3b3b3]">
                    <Icon name={cta.icon} />
                </div>
            </BtnLinear>
            : <BtnBackdrop key={cta.id} href={cta.href}>
                <Text
                    text={cta.text}
                    color="#b3b3b3"
                    fontSize="1rem"
                />
                <Icon name={cta.icon} />
            </BtnBackdrop>
    ))

    return (
        <div className="flex gap-10">
            {cta}
        </div>
    )
}