import About from "./About";

export default function Main() {
    return (
        <main className="h-[calc(100vh-6rem)]"> {/* Subtract header height + padding */}
          <div className="grid grid-cols-4 grid-rows-7 gap-4 h-full">
            <div className="border-4 col-span-3 row-span-5">1</div>
            <div className="border-4 row-span-2 col-start-3 row-start-6">2</div>
            <div className="border-4 col-span-2 col-start-1 row-start-6">3</div>
            <div className="border-4 col-span-2 col-start-1 row-start-7">4</div>
            <div className="border-4 row-span-3 col-start-4 row-start-1">
              <About />
            </div>
            <div className="border-4 col-start-4 row-start-4">6</div>
            <div className="border-4 row-span-3 col-start-4 row-start-5">7</div>
          </div>
        </main>
      );
}
