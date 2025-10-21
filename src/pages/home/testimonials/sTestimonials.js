import { ATitleSection } from '../../../ui/atoms/aTitle'
import AText from '../../../ui/atoms/aText'

export default function STestimonials({ data }) {
    return (
        <section id='testimonies' className="relative bg-[#12121] py-20 px-0">
            <div className='px-30'>
                <AText data={data.subTitle} />
                <ATitleSection
                    data={data.title}
                    color="#e0e0e0"
                    fontSize='1.6rem'
                />
            </div>


            {/*  <Testimonies 
                testimonies={testimonials.items}
            />

            <Metrics metrics={testimonials.metrics} /> */}
        </section>
    )
}