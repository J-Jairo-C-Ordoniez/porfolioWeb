import { ATitleBold } from "@/components/atoms/Title";
import MForm from "@/components/molecules/Form";

export default function SContact({ data }) {
  return (
    <section
      id={data.id}
      className="flex flex-col items-center space-y-10 overflow-hidden px-10 py-20 sm:px-12 md:px-20 lg:px-32 xl:px-35"
    >
      <ATitleBold
        data={data.title}
        fontSize="text-5xl lg:text-6xl"
        textAlign="center"
        color="#e0e0e0"
      />

      <MForm />
    </section>
  );
}
