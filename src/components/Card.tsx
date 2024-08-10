import React from 'react';

interface CardProps {
  title: string;
  number: number;
}

const Card: React.FC<CardProps> = ({ title, number }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
      <p className="mt-2 text-3xl font-bold text-gray-800 dark:text-gray-200">{number}</p>
    </div>
  );
};

export default Card;
