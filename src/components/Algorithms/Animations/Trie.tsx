'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type TrieNode = {
  id: string
  label: string
  x: number
  y: number
  parent: string | null
}

const initialNodes: TrieNode[] = [
  { id: 'root', label: '', x: 200, y: 50, parent: null }
]

const horizontalSpacing = 100
const verticalSpacing = 90

const TrieAnimation = () => {
  const [nodes, setNodes] = useState<TrieNode[]>(initialNodes)
  const [input, setInput] = useState('')

  function insertWord(word: string) {
    if (!word) return

    const newNodes = [...nodes]
    let currentParent = 'root'
    let currentLevel = 1

    for (let i = 0; i < word.length; i++) {
      const letter = word[i]
      // Buscar si existe hijo con esa letra
      const existingNode = newNodes.find(
        n => n.parent === currentParent && n.label === letter
      )

      if (existingNode) {
        currentParent = existingNode.id
        currentLevel++
      } else {
        const siblings = newNodes.filter(n => n.parent === currentParent)
        const siblingIndex = siblings.length
        const parentNode = newNodes.find(n => n.id === currentParent)

        const maxSpacing = 160
        const minSpacing = 40
        const perNodeSpacing = Math.max(
          minSpacing,
          maxSpacing - currentLevel * 20
        )

        const x =
          (parentNode?.x ?? 200) +
          (siblingIndex - Math.floor(siblings.length / 2)) * perNodeSpacing

        const y = 50 + currentLevel * verticalSpacing
        const newNodeId = currentParent + letter + i


        newNodes.push({
          id: newNodeId,
          label: letter,
          x,
          y,
          parent: currentParent
        })
        currentParent = newNodeId
        currentLevel++
      }
    }

    setNodes(newNodes)
  }

  const MotionLine = motion('line')

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 0.5 } }
  }

  return (
    <div className="flex flex-col justify-between items-center my-12 p-4 border-1 max-w-4xl mx-auto bg-slate-200">
      <div style={{ marginBottom: 16 }}>
        <input
          className="bg-slate-300 p-1"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Insertar palabra"
        />
        <button
          onClick={() => {
            insertWord(input.trim().toLowerCase())
            setInput('')
          }}
          className="ml-6 bg-green-400 hover:bg-green-500 p-2 rounded cursor-pointer"
        >
          Insertar
        </button>
      </div>

      <div
        className="w-full h-125 overflow-auto "
        style={{
          border: '1px solid #ccc'
        }}
      >
        <svg width="1000" height="1000">
          {/* Líneas */}
          {nodes.map(({ id, x, y, parent }) => {
            if (parent === null) return null
            const parentNode = nodes.find(n => n.id === parent)
            if (!parentNode) return null

            return (
              <MotionLine
                key={`${parent}-${id}`}
                x1={parentNode.x}
                y1={parentNode.y + 20}
                x2={x}
                y2={y - 20}
                stroke="black"
                strokeWidth={2}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
              />
            )
          })}

          {/* Nodos */}
          <AnimatePresence>
            {nodes.map(({ id, x, y, label }) => (
              <motion.g
                key={id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ cursor: 'default' }}
              >
                <circle cx={x} cy={y} r={20} fill="#9b59b6" />
                {label && (
                  <text
                    x={x}
                    y={y + 6}
                    textAnchor="middle"
                    fill="white"
                    fontWeight="bold"
                    fontSize="18"
                  >
                    {label}
                  </text>
                )}
              </motion.g>
            ))}
          </AnimatePresence>
        </svg>
      </div>
    </div>
  )
}

export default TrieAnimation
