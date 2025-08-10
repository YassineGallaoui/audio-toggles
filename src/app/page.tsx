"use client";

import AudioControls from "@/components/AudioControls";
import { SelectOption } from "@/components/CustomSelect";
import IconsGrid from "@/components/IconsGrid";
import { useState } from "react";

export default function Home() {

  const defaultAudioOptions: SelectOption[] = [
    {
      label: "Ocean",
      mp3Link: "./ocean.mp3"
    }, {
      label: "Forest",
      mp3Link: "./forest.mp3"
    }, {
      label: "Windy Mountain",
      mp3Link: "./mountain.mp3"
    }, {
      label: "Binaural Beats - Gamma",
      mp3Link: "./bbGamma.mp3"
    }, {
      label: "Binaural Beats - Beta",
      mp3Link: "./bbBeta.mp3"
    }, {
      label: "Binaural Beats - Alpha",
      mp3Link: "./bbAlpha.mp3"
    }, {
      label: "Binaural Beats - Theta",
      mp3Link: "./bbTheta.mp3"
    }, {
      label: "Binaural Beats - Delta",
      mp3Link: "./bbDelta.mp3"
    },
  ]
  const [selectedMp3, setSelectedMp3] = useState<string>(defaultAudioOptions[0].mp3Link);
  const [audioOn, setAudioOn] = useState<boolean>(false);

  return (
    <div className="relative container col-12 mt-6">
      <AudioControls setSelectedMp3={setSelectedMp3} setAudioOn={setAudioOn} selectedMp3={selectedMp3} audioOn={audioOn} defaultAudioOptions={defaultAudioOptions} />
      <IconsGrid audioOn={audioOn} setAudioOn={setAudioOn} />
    </div>
  );
}
