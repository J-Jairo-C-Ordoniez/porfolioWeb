import AText from './aText';

export default function AList({ data, fontSize = '1.2rem' }) {
    return (
        <ul className="my-4 pl-6">
            {data.map(item => (
                <li key={item.id} className="py-1 flex items-center gap-3">
                    <span
                        className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00c896b3] flex-shrink-0"
                        aria-hidden="true"
                    />
                    <div className="min-w-0">
                        <div className="text-sm text-gray-800 dark:text-gray-200">
                            <AText
                                data={item.text}
                                fontSize={fontSize}
                                color="#ACB4BF"
                            />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};