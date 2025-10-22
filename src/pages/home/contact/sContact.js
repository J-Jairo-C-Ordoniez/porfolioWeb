import { ATitleBold, ATitleSection } from "@/ui/atoms/aTitle"
import APicture from "../../../ui/atoms/aPicture"
import MForm from "@/ui/molecules/mForm"

export default function SContact({ data }) {
    return (
        <section 
            id={data.id} 
            className="p-40 flex flex-col items-center space-y-10"
        >
            <ATitleBold
                data={data.title}
                fontSize="4rem"
                textAlign="center"
                color="#e0e0e0"
            />

            <MForm />
        </section>
    )
}

