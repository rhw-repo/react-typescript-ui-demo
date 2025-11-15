export interface MessagePart {
  text: string;
  highlight?: boolean;
}

export interface ShapesContent {
  message: MessagePart[];
  circleMessage: MessagePart[];
}

export const mockShapesContent: ShapesContent = {
  message: [
    { text: "The value of the investment could be " },
    { text: "US$60 million", highlight: true },
    { text: " in a five year bond." },
  ],
  circleMessage: [
    { text: "Eleven Years " },
    { text: "Successful ", highlight: true },
    { text: "\n\nDelivery" },
  ],
};
