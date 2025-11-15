import { useEffect, useState } from "react";
import type { FC } from "react";
import type { AnimatedCounterStatCard } from "../../data/animatedCounterStatCardsContent";

interface CountProps {
  data: AnimatedCounterStatCard;
}

const Count: FC<CountProps> = ({ data }) => {
  const { number = "0", duration = "1000" } = data;
  const [count, setCount] = useState("0");

  useEffect(() => {
    const digitsOnlyString = number.replace(/,/g, "");
    const rawTargetValue = parseFloat(digitsOnlyString) || 0;
    if (rawTargetValue <= 0) return;

    const decimalPlaces = digitsOnlyString.includes(".")
      ? digitsOnlyString.split(".")[1].length
      : 0;
    const decimalPlaceMultiplier = 10 ** decimalPlaces;
    const scaledTargetValue = Math.round(
      rawTargetValue * decimalPlaceMultiplier
    );

    const animationDurationMs = parseInt(duration, 10) || 1000;

    const maxAnimationFrames = 60;
    const totalFrames = Math.min(scaledTargetValue, maxAnimationFrames);

    const valueIncrementPerFrame = scaledTargetValue / totalFrames;

    const frameIntervalMs = Math.max(
      Math.floor(animationDurationMs / totalFrames),
      10
    );

    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });

    let currentScaledValue = 0;
    const frameTimerID = window.setInterval(() => {
      currentScaledValue += valueIncrementPerFrame;

      if (currentScaledValue >= scaledTargetValue) {
        setCount(formatter.format(rawTargetValue));
        clearInterval(frameTimerID);
      } else {
        const displayValue = currentScaledValue / decimalPlaceMultiplier;
        setCount(formatter.format(displayValue));
      }
    }, frameIntervalMs);

    return () => clearInterval(frameTimerID);
  }, [number, duration]);

  return (
    <div>
      <span>{count}</span>
    </div>
  );
};

export default Count;
