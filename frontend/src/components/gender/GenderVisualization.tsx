'use client'

import { Gender } from '@/types'
import { motion } from 'framer-motion'

interface GenderVisualizationProps {
  gender: Gender
  word: string
  className?: string
}

const genderConfig = {
  der: {
    color: 'bg-der-blue',
    textColor: 'text-der-blue',
    borderColor: 'border-der-blue',
    effect: 'fall',
  },
  die: {
    color: 'bg-die-red',
    textColor: 'text-die-red',
    borderColor: 'border-die-red',
    effect: 'pulse',
  },
  das: {
    color: 'bg-das-green',
    textColor: 'text-das-green',
    borderColor: 'border-das-green',
    effect: 'bounce',
  },
}

const fallVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'ease-in',
      duration: 0.5,
    },
  },
}

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.9, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const bounceVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
}

export function GenderVisualization({ gender, word, className = '' }: GenderVisualizationProps) {
  const config = genderConfig[gender]

  const getVariants = () => {
    switch (gender) {
      case 'der':
        return fallVariants
      case 'die':
        return pulseVariants
      case 'das':
        return bounceVariants
    }
  }

  return (
    <motion.div
      className={`${config.color} ${className} p-6 rounded-lg border-2 ${config.borderColor} shadow-lg`}
      variants={getVariants()}
      initial="initial"
      animate="animate"
    >
      <div className="text-center">
        <div className={`text-3xl font-bold ${config.textColor} mb-2`}>
          {gender.toUpperCase()}
        </div>
        <div className="text-2xl font-semibold text-white">{word}</div>
      </div>
    </motion.div>
  )
}

