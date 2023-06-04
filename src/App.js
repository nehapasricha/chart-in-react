import { useEffect, useState } from "react";
import Circle from "./components/Circles";
import { mockData } from "./data/mockData";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(mockData);
  const [xMin, setXMin] = useState(10000);
  const [yMin, setYMin] = useState(10000);
  const [xMax, setXMax] = useState();
  const [yMax, setYMax] = useState(0);

  useEffect(() => {
    for (let item of data) {
      console.log(item);
      setXMin((x) => {
        return x < item["salary"] ? x : item["salary"];
      });
      setXMax((x) => {
        return x > item["salary"] ? x : item["salary"];
      });
      setYMin((y) => {
        return y < item["compratio"] ? y : item["compratio"];
      });
      setYMax((y) => {
        return y > item["compratio"] ? y : item["compratio"];
      });
    }

    console.log(xMin);
  }, []);

  return (
    <div
      style={{
        height: (yMax - yMin) * 10,
        width: (xMax - xMin) * 10,
        border: "1px solid black",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "self",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          height: (yMax - yMin) * 10,
          width: "1px",
          border: "2px solid black"
        }}
      ></div>
      <div
        style={{
          height: "2px",
          width: (xMax - xMin) * 10,
          border: "2px solid black",
          position: "absolute",
          top: (yMax - yMin) * 5
        }}
      ></div>

      {data.map((item) => {
        console.log(item.salary - xMin);
        return (
          <Circle
            top={(item.compratio - yMin) * 10 - item.headcount / 2}
            left={(item.salary - xMin) * 10 - item.headcount / 2}
            height={item.headcount}
            width={item.headcount}
            text={item.title}
          ></Circle>
        );
      })}
    </div>
  );
}
