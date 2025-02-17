import React, { useState, useEffect } from "react";
import { Howl } from "howler";

interface AudioPlayerProps {
    src: string;
    audioOn: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, audioOn }) => {
    const [sound, setSound] = useState<Howl | null>(null);

    useEffect(() => {
        if (src) {
            if (sound) {
                sound.fade(1, 0, 500);
                sound.once("fade", () => {
                    sound.stop();
                });
            }
            // Create a new Howl instance for the new src
            const newSound = new Howl({
                src: [src],
                html5: true,
                volume: 0,
                onplay: () => {
                    newSound.fade(0, 1, 500);
                },
                onend: () => {
                    newSound.play();
                },
            });
            console.log(newSound)
            setSound(newSound);

            if (audioOn)
                newSound.play()

            return () => {
                if (newSound) {
                    newSound.unload();
                }
            };
        }
    }, [src]);

    useEffect(() => {
        if (sound != null)
            if (audioOn) {
                sound.fade(0, 1, 500);
                sound.once("fade", () => {
                    sound.play();
                });
            } else {
                sound.fade(1, 0, 500);
                sound.once("fade", () => {
                    sound.stop();
                });
            }
    }, [audioOn])

    return (
        <></>
    );
};

export default AudioPlayer;