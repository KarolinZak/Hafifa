import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";
import type { NeatConfig } from "@firecms/neat";

interface NeatVisualizerProps {
  config: NeatConfig;
}

export const neatConfig: NeatConfig = {
  colors: [
    { color: "#FFCAF2", enabled: true },
    { color: "#FFCC94", enabled: true },
    { color: "#FFC9EC", enabled: true },
    { color: "#FFB6CE", enabled: true },
    { color: "#FFE8D1", enabled: true },
  ],
  speed: 2,
  horizontalPressure: 4,
  verticalPressure: 5,
  waveFrequencyX: 4,
  waveFrequencyY: 3,
  waveAmplitude: 2,
  shadows: 4,
  highlights: 7,
  backgroundColor: "#00A2FF",
  resolution: 0.5,
  flowEnabled: true,
};

export const NeatVisualizer: React.FC<NeatVisualizerProps> = ({ config }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const neatRef = useRef<NeatGradient | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    neatRef.current = new NeatGradient({
      ref: canvasRef.current, // ✅ correct type
      ...config,
    });

    return () => {
      neatRef.current?.destroy();
      neatRef.current = null;
    };
  }, [config]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", 
        inset: 0, 
        zIndex: -1, 
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", 
      }}
    />
  );
};
