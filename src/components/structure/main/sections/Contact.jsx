import { ATitleSection, ATitleBold } from "../../../A/ui/Title";
import MForm from "../ui/Form";

export default function SContact({ data }) {
  return (
    <section
      id={data.id}
      className="flex flex-col items-center gap-24 px-6 py-32 sm:px-12 md:px-20 lg:px-32 xl:px-40"
    >
      <div className="flex flex-col items-center text-center max-w-2xl">
        <ATitleSection data={data.title} className="mb-8" />
        <ATitleBold data="Ready to elevate your project?" fontSize="text-4xl md:text-5xl" className="mb-12 opacity-80" />
        <div className="h-[1px] w-20 bg-accent opacity-50" />
      </div>

      <div className="w-full max-w-4xl border border-white/5 bg-white/[0.01] p-12 lg:p-20">
        <MForm />
      </div>
    </section>
  );
}
