import { getRandomColor } from "../helper/getRandomcolor";

const Circle = ({ top, left, width, height, text }) => {
  return (
    <div
      class="circle"
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: width,
        height: height,
        backgroundColor: getRandomColor()
      }}
    >
      {text}
    </div>
  );
};

export default Circle;
