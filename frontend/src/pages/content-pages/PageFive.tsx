import { cardContent } from "../../data/cardContent";
import PagesCard from "../../components/pages-card/PagesCard";

const PageFive = () => {
  const pageFiveCards = cardContent.filter((card) =>
    card.id.startsWith("page-five-")
  );

  return (
    <>
      <section className="pages__section page-five">
        {pageFiveCards.map((item) => (
          <PagesCard key={item.id} {...item} />
        ))}
      </section>
    </>
  );
};

export default PageFive;
