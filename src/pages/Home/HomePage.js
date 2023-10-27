import { useTitle } from "../../hooks/useTitle";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Faq } from "./components/Faq";

export const HomePage = () => {
  useTitle("Access Latest Computer Science eBooks");

  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Faq />
    </main>
  )
}
