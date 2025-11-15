import { cardContent } from "../../data/cardContent";
import PagesCard from "../../components/pages-card/PagesCard";

const PageOne = () => {
  const pageOneCards = cardContent.filter((card) =>
    card.id.startsWith("page-one-")
  );

  return (
    <>
      <section className="pages__section">
        {pageOneCards.map((item) => (
          <PagesCard key={item.id} {...item} />
        ))}
      </section>
    </>
  );
};

export default PageOne;
