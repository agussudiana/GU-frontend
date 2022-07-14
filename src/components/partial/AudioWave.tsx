import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import Spectogram from "wavesurfer.js/src/plugin/spectrogram";
import colormap from "colormap";
type Props = {
  audioUrl: string;
};
const colors = colormap({
  colormap: "hot",
  nshades: 256,
  format: "float",
});

export const AudioWave = ({ audioUrl }: Props) => {
  const waveformRef = useRef<any>();
  const spectoRef = useRef<any>();

  useEffect(() => {
    if (waveformRef.current) {
      let wavesurfer: any;
      wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        backend: "MediaElement",
        mediaControls: true,
        progressColor: "#3478FC",
        height: 150,
        plugins: [
          Spectogram.create({
            wavesurfer: wavesurfer,
            container: spectoRef.current,
            labels: true,
            height: 256,
            frequencyMax: 8000,
            colorMap: colors as any,
          }),
        ],
      });
      if (audioUrl) {
        wavesurfer.load(audioUrl);
      }
      return () => wavesurfer.destroy();
    }
  }, [audioUrl]);
  return (
    <>
      <div ref={waveformRef}></div>
      <div ref={spectoRef}></div>
    </>
  );
};
