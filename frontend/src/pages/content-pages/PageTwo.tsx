import { cardContent } from "../../data/cardContent";
import PagesCard from "../../components/pages-card/PagesCard";

const PageTwo = () => {
  const pageTwoCards = cardContent.filter((card) =>
    card.id.startsWith("page-two-")
  );

  return (
    <>
      <section className="pages__section">
        {pageTwoCards.map((item) => (
          <PagesCard key={item.id} {...item} />
        ))}
      </section>
    </>
  );
};

export default PageTwo;
