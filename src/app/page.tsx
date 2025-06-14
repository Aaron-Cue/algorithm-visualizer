import Card from '@/components/Card'
import cardsInfo from '@/data/typeAlgorithms'

export default function Home() {
  return (
    <>
      <section>
        <h1 className="text-7xl font-medium my-2">Algorithm Visualizer</h1>
        <p className="text-2xl text-gray-700">
          Explore and learn about sorting, searching, graph algorithms, and more
          with animations and pseudocode!
        </p>
      </section>
      <section className="mt-20 mb-32 grid gap-8 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] justify-items-center lg:grid-cols-3">
        {cardsInfo.map(card => (
          <Card
            key={card.title}
            image={card.image}
            title={card.title}
            description={card.description}
            width={card.width}
            height={card.height}
            href={card.href}
          />
        ))}
      </section>
    </>
  )
}
