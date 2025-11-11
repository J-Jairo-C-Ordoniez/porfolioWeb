import { ATitleSection } from "../../../ui/atoms/aTitle";
import AText from "../../../ui/atoms/aText";
import OTestimonie from "../../../ui/organisms/oTestimonie";
import OMetric from "../../../ui/organisms/oMetric";

export default function STestimonials({ data }) {
  return (
    <section 
      id="testimonies" 
      className="relative overflow-x-hidden py-10"
    >
      <div className="overflow-x-hidden px-10 py-4 sm:px-12 md:px-20 lg:px-32 xl:px-35">
        <AText 
          data={data.subTitle} 
          fontSize="text-xl"
        />

        <ATitleSection 
          data={data.title} 
          color="#e0e0e0" 
          fontSize="text-2xl sm:text-2xl md:text-3xl"
        />
      </div>

      <OTestimonie data={data.items} />
      <OMetric data={data.metrics} />
    </section>
  );
}
