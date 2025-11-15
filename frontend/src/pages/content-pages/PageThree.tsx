import { cardContent } from "../../data/cardContent";
import PagesCard from "../../components/pages-card/PagesCard";

const PageThree = () => {
  const pageThreeCards = cardContent.filter((card) =>
    card.id.startsWith("page-three-")
  );

  return (
    <>
      <section className="pages__section page-three">
        {pageThreeCards.map((item) => (
          <PagesCard key={item.id} {...item} />
        ))}
      </section>
    </>
  );
};

export default PageThree;
