import React from 'react';
import Text from './aText';

export default function List({ list, fontSize = '1rem' }) {
    return (
        <ul className="my-4 pl-6">
            {list.map(item => (
                <li key={item.id} className="py-1 flex items-center gap-3">
                    <span
                        className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00c896b3] flex-shrink-0"
                        aria-hidden="true"
                    />
                    <div className="min-w-0">
                        <div className="text-sm text-gray-800 dark:text-gray-200">
                            <Text text={item.text} fontSize={fontSize} />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};