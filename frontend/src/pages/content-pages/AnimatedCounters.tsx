import { AnimatedCounterStatCards } from "../../components/animated-counter-stat-cards/AnimatedCounterStatCards";
import { animatedCounterStatsCardContent } from "../../data/animatedCounterStatCardsContent";
import SectionDivider from "../../components/ui-elements/section-divider/SectionDivider";

const AnimatedCounters = () => {
  return (
    <>
      <AnimatedCounterStatCards items={animatedCounterStatsCardContent}/>
      <SectionDivider />
    </>
  );
};

export default AnimatedCounters;
