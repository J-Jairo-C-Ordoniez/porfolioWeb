import TitleSection from '../../ui/atoms/TitleSection'
import Text from '../../ui/atoms/Text'
import Testimonies from '../../ui/organisms/Testimonies'
import Metrics from '../../ui/organisms/Metrics'

export default function Testimonials({ testimonials }) {
    return (
        <section id='testimonies' className="relative bg-[#12121] p-10">
            <Text 
                text={testimonials.subTitle}
            />
            <TitleSection
                title={testimonials.title}
                color="#e0e0e0"
                fontSize='1.6rem'
            />

            <Testimonies 
                testimonies={testimonials.items}
            />

            <Metrics metrics={testimonials.metrics} />
        </section>
    )
}