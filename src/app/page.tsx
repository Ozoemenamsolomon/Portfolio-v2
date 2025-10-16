import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container-custom min-h-[60vh] flex items-center">
      <section className="flex flex-col md:flex-row items-center justify-between w-full gap-8 py-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Hello,
            <br />
            I&apos;m Solomon.
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-soo-blue">
            Software Developer
          </h2>
          <Link href="/works" className="soo-btn inline-block">
            View my portfolio
          </Link>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-full max-w-md h-[350px]">
            <Image
              src="/images/me.png"
              alt="Solomon Ozoemenam in a professional outfit"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  )
}
