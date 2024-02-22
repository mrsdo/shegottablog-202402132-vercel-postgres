import { Button } from '@/components/shared/ui/button';



export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="wide-container">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl md:max-w-3xl">
           SheGottaBlog
          </h1>
          <p className="mt-6 md:text-xl md:max-w-3xl">
            Exploring methods to provide better documentation for our tech teams MERN stack (MongoDB, Express,
            React, Node.JS), Next.js and ApollographQL."
          </p>

          <span className="flex flex-wrap gap-4 mt-6">
            <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
              <Button size="xl">Vercel/Next.js</Button>
            </a>
            <a href="https://shipixen.com/" target="_blank" rel="noopener noreferrer">
              <Button size="xl" variant="outlinePrimary">
                Shipixen/VisualUI
              </Button>
            </a>
          </span>
        </section>
      </div>

      <section className="wide-container mt-12">
      Latest Projects
      </section>





</div>
  );
}
