import { Canvas } from "react-three-fiber";
import Ribbon from "./Ribbon";
import { useState, useEffect, FC } from "react";
import useWindowResize from "../hooks/useWindowResize";

const Ribbons: FC = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [pixelRatio, setPixelRatio] = useState(1);

  useWindowResize({
    onResize: () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      setPixelRatio(window.devicePixelRatio);
    },
  });

  return (
    <Canvas
      orthographic
      camera={{
        near: 0,
        far: 200,
        zoom: 90,
        position: [30, 20, 90],
      }}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        position: "fixed",
        top: 0,
        left: 0,
      }}
      pixelRatio={pixelRatio}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <Ribbon offset={i} />
      ))}
    </Canvas>
  );
};

export default Ribbons;
