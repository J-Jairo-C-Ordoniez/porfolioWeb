export default function AQuote({ data }) {
  return (
    <blockquote className="my-6 rounded-lg border-l-4 border-gray-400 bg-gray-900 p-6 text-gray-100">
      <p className="mb-4 text-lg leading-relaxed text-gray-800 italic dark:text-gray-200">
        {data}
      </p>
    </blockquote>
  );
}
