import Image from 'next/image'

const clients = [3, 4, 1, 10, 2, 9, 11, 12, 5, 6, 8, 7, 18, 17, 16]

export function LogoCloud() {
  return (
    <ul
      aria-label="Our clients"
      className="mx-auto mt-14 grid max-w-[1100px] grid-cols-2 gap-x-4 gap-y-4 px-4 sm:grid-cols-3 lg:grid-cols-5"
    >
      {clients.map((id, index) => (
        <li key={id} className="relative h-32 sm:h-36">
          <Image
            src={`/clients/client-${id}.png`}
            alt={`Client logo ${index + 1}`}
            fill
            sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 50vw"
            className="scale-[1.3] object-contain"
          />
        </li>
      ))}
    </ul>
  )
}
