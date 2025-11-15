import { cardContent } from "../../data/cardContent";
import PagesCard from "../../components/pages-card/PagesCard";

const PageFour = () => {
  const pageFourCards = cardContent.filter((card) =>
    card.id.startsWith("page-four-")
  );

  return (
    <>
      <section className="pages__section">
        {pageFourCards.map((item) => (
          <PagesCard key={item.id} {...item} />
        ))}
      </section>
    </>
  );
};

export default PageFour;
