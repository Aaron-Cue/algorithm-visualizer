'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Node } from '@/types/algorithms'
import { insertNodeBst } from '@/utils/insertNodeBst'

const initialNodes: Node[] = [{ id: 10, x: 200, y: 50, parent: null }]

const BSTAnimation = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes)
  const [input, setInput] = useState<string>('1')
  const [exists, setExists] = useState<boolean>(false)

  const insertNode = (value: number) => {
    const newNodes = insertNodeBst(value, nodes)

    if (newNodes === null) {
      setExists(true)
      return
    }

    setExists(false)
    setNodes(newNodes)
  }

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 0.5 } }
  }

  return (
    <div className="flex flex-col justify-between items-center my-12 p-4 border-1 max-w-4xl mx-auto bg-slate-200">
      <div className="mb-4">
        <input
          className="bg-slate-300 p-1"
          type="number"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Insert value"
        />
        <button
          onClick={() => {
            const val = Number(input)
            if (!isNaN(val)) {
              insertNode(val)
              setInput('1')
            }
          }}
          className="ml-6 bg-green-400 hover:bg-green-500 p-2 rounded cursor-pointer"
        >
          Insert
        </button>
      </div>

      <div
        className={`text-red-600 mb-4 font-semibold ${
          exists ? 'visible' : 'invisible'
        }`}
      >
        node already exists
      </div>

      <div
        className='w-full h-125 overflow-auto '
        style={{
          border: '1px solid #ccc'
        }}
      >
        <svg width="1000" height="1000">
          {/* lineas */}
          {nodes.map(({ id, x, y, parent }) => {
            if (parent === null) return null
            const parentNode = nodes.find(n => n.id === parent)
            if (!parentNode) return null
            return (
              <motion.line
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

          {/* nodos */}
          <AnimatePresence>
            {nodes.map(({ id, x, y }) => (
              <motion.g
                key={id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ cursor: 'default' }}
              >
                <circle cx={x} cy={y} r={20} fill="#3498db" />
                <text
                  x={x}
                  y={y + 6}
                  textAnchor="middle"
                  fill="white"
                  fontWeight="bold"
                  fontSize="16"
                >
                  {id}
                </text>
              </motion.g>
            ))}
          </AnimatePresence>
        </svg>
      </div>
    </div>
  )
}

export default BSTAnimation
