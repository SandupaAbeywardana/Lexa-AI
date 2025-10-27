'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TechnologyCardProps {
  category: string;
  techs: Array<{
    name: string;
    logo: string;
  }>;
  index: number;
}

const TechnologyCard = ({ category, techs, index }: TechnologyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="font-bold text-xl mb-6 text-primary">{category}</h3>
      <div className="grid grid-cols-2 gap-4">
        {techs.map((tech) => (
          <motion.div
            key={tech.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="relative w-12 h-12 mb-2">
              <Image
                src={tech.logo}
                alt={`${tech.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-gray-700">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechnologyCard;
