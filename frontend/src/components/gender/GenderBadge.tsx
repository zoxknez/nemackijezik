'use client'

import { Gender } from '@/types'
import { motion } from 'framer-motion'

interface GenderBadgeProps {
  gender: Gender
  size?: 'sm' | 'md' | 'lg'
  showWord?: boolean
  word?: string
}

const genderStyles = {
  der: {
    bg: 'bg-der-blue',
    text: 'text-white',
    border: 'border-der-blue',
  },
  die: {
    bg: 'bg-die-red',
    text: 'text-white',
    border: 'border-die-red',
  },
  das: {
    bg: 'bg-das-green',
    text: 'text-white',
    border: 'border-das-green',
  },
}

const sizeStyles = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1.5',
  lg: 'text-base px-4 py-2',
}

export function GenderBadge({ gender, size = 'md', showWord = false, word }: GenderBadgeProps) {
  const styles = genderStyles[gender]
  const sizeClass = sizeStyles[size]

  const getAnimation = () => {
    switch (gender) {
      case 'der':
        return {
          initial: { y: -10, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.3 },
        }
      case 'die':
        return {
          animate: {
            scale: [1, 1.1, 1],
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
            y: [0, -5, 0],
            transition: {
              duration: 0.6,
              repeat: Infinity,
              ease: 'easeOut',
            },
          },
        }
    }
  }

  return (
    <motion.span
      className={`${styles.bg} ${styles.text} ${sizeClass} rounded-full font-semibold border-2 ${styles.border} inline-flex items-center gap-2`}
      {...getAnimation()}
    >
      <span>{gender}</span>
      {showWord && word && <span className="font-normal">({word})</span>}
    </motion.span>
  )
}

