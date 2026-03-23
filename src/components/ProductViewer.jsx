import useMacBookStore from "../store";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import StudioLight from "./three/StudioLights.jsx";
import MacbookModel14 from "./models/Macbook-14.jsx";
import MacbookModel16 from "./models/Macbook-16.jsx";
import ModelSwitcher from "./three/ModelSwitcher.jsx";
import { useMediaQuery } from "react-responsive";

const ProductViewer = () => {
  const { color, setColor, scale, setScale } = useMacBookStore();

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <section id="product-viewer">
      <h2>Take a closer look at the design</h2>
      <div className="controls">
        <p className="info">
          MacBook Pro {scale === "0.06" ? '14"' : '16"'} in{" "}
          {color === "#e8e8e8" ? "Silver" : "Space Black"}
        </p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#e8e8e8")}
              className={clsx(
                "bg-neutral-300",
                color === "#e8e8e8" && "active",
              )}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-800",
                color === "#2e2c2e" && "active",
              )}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale("0.06")}
              className={clsx(
                scale === "0.06"
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              14"
            </div>
            <div
              onClick={() => setScale("0.08")}
              className={clsx(
                scale === "0.08"
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              16"
            </div>
          </div>
        </div>
      </div>

      <Canvas id="canvas" camera={{ position: [0, 0, 4], fov: 45 }}>
        <StudioLight />

        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
