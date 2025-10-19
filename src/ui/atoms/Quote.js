export default function Quote({ quote }) {
    return (
        <blockquote className='relative p-6 rounded-lg my-6 bg-gray-900 border-l-4 border-gray-400 text-gray-100'>
            <p className="text-lg leading-relaxed italic text-gray-800 dark:text-gray-200 mb-4">
                {quote}
            </p>
        </blockquote>
    );
}