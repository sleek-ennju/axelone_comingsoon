import About from "./About";
import Faq from "./Faq";
import Introduction from "./Introduction";
import WhatWeOffer from "./WhatWeOffer";
import WhyChooseUs from "./WhyChooseUs";
import Explore from "./Explore";
import WaitList from "./WaitList";


function main() {
  return (
    <main className="bg-primary w-full h-full pt-16 flex flex-col">
      <Introduction />
      <WhatWeOffer />
      <Explore />
      <WhyChooseUs />
      <About />
      <WaitList />
      <Faq />
    </main>
  )
}

export default main;