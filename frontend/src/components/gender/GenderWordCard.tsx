'use client'

import { Gender } from '@/types'
import { GenderBadge } from './GenderBadge'
import { motion } from 'framer-motion'

interface GenderWordCardProps {
  gender: Gender
  word: string
  translation?: string
  phonetic?: string
  onClick?: () => void
}

export function GenderWordCard({ gender, word, translation, phonetic, onClick }: GenderWordCardProps) {
  const getAnimation = () => {
    switch (gender) {
      case 'der':
        return {
          initial: { y: -50, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { type: 'ease-in', duration: 0.5 },
        }
      case 'die':
        return {
          animate: {
            scale: [1, 1.02, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          },
        }
      case 'das':
        return {
          animate: {
            y: [0, -8, 0],
            transition: {
              duration: 0.6,
              repeat: Infinity,
              ease: 'easeOut',
              repeatDelay: 0.5,
            },
          },
        }
    }
  }

  return (
    <motion.div
      className="bg-dark-surface border-2 border-dark-border rounded-lg p-6 cursor-pointer hover:border-opacity-50 transition-colors"
      onClick={onClick}
      {...getAnimation()}
    >
      <div className="flex items-start justify-between mb-4">
        <GenderBadge gender={gender} size="lg" />
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">{word}</h3>
        {phonetic && <div className="text-gray-400 text-sm">[{phonetic}]</div>}
        {translation && <div className="text-gray-300">{translation}</div>}
      </div>
    </motion.div>
  )
}

