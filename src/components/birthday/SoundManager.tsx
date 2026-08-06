import { useCallback, useRef, useEffect } from "react";
import { AUDIO_ASSETS } from "@/config/birthday";

// Audio dari direct link GitHub raw atau hosting yang reliable
// Kamu bisa upload audio ke GitHub repo lalu ambil raw link nya
const AUDIO_URLS = {
    // Temporary: Gunakan audio dari freesound atau upload sendiri ke GitHub
    // Contoh: https://raw.githubusercontent.com/username/repo/main/audio/bgmusic.mp3
    bgMusic: AUDIO_ASSETS.bgmUrl || "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3", // Music romantic
    typeClick: "https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3",
    whoosh: "https://assets.mixkit.co/sfx/preview/mixkit-air-woosh-1489.mp3",
    reveal: "https://assets.mixkit.co/sfx/preview/mixkit-magical-coin-win-1936.mp3",
    pop: "https://assets.mixkit.co/sfx/preview/mixkit-balloon-pop-2061.mp3",
    boom: "https://assets.mixkit.co/sfx/preview/mixkit-small-fireworks-explosion-1699.mp3",
};
class AudioManager {
    private bgMusic: HTMLAudioElement | null = null;
    private audioCache: Map<string, HTMLAudioElement[]> = new Map();
    private started = false;
    start() {
        if (this.started)
            return;
        this.started = true;
        this.playBgMusic();
    }
    private playBgMusic() {
        try {
            // Skip jika tidak ada URL
            if (!AUDIO_URLS.bgMusic) {
                console.debug("Background music URL kosong, skip playback");
                return;
            }
            
            this.bgMusic = new Audio(AUDIO_URLS.bgMusic);
            this.bgMusic.loop = true;
            this.bgMusic.volume = 0.25;
            this.bgMusic.play().catch((err) => {
                console.debug("Autoplay failed or blocked:", err);
                const playOnInteraction = () => {
                    this.bgMusic?.play().catch(() => {});
                    document.removeEventListener('click', playOnInteraction);
                };
                document.addEventListener('click', playOnInteraction);
            });
        }
        catch (e) {
            console.debug("Audio initialization failed:", e);
        }
    }
    fadeOutBgMusic(duration = 2000) {
        if (!this.bgMusic)
            return;
        const steps = 20;
        const stepTime = duration / steps;
        const volumeStep = this.bgMusic.volume / steps;
        let step = 0;
        const interval = setInterval(() => {
            if (this.bgMusic && step < steps) {
                this.bgMusic.volume = Math.max(0, this.bgMusic.volume - volumeStep);
                step++;
            }
            else {
                clearInterval(interval);
                this.bgMusic?.pause();
            }
        }, stepTime);
    }
    setBgVolume(vol: number) {
        if (this.bgMusic)
            this.bgMusic.volume = Math.max(0, Math.min(1, vol));
    }
    playEffect(type: "typeClick" | "whoosh" | "reveal" | "pop" | "boom", volume = 0.4) {
        try {
            // Skip jika tidak ada URL
            if (!AUDIO_URLS[type]) {
                return;
            }
            
            const audio = new Audio(AUDIO_URLS[type]);
            audio.volume = volume;
            audio.play().catch(() => { });
        }
        catch (e) {
            console.debug("Audio effect playback failed:", e);
        }
    }
    stop() {
        this.bgMusic?.pause();
        this.bgMusic = null;
        this.started = false;
    }
}
const globalAudioManager = new AudioManager();
export const useSoundManager = () => {
    const managerRef = useRef(globalAudioManager);
    useEffect(() => {
        return () => {
        };
    }, []);
    const startMusic = useCallback(() => {
        managerRef.current.start();
    }, []);
    const playType = useCallback(() => {
        managerRef.current.playEffect("typeClick", 0.15);
    }, []);
    const playWhoosh = useCallback(() => {
        managerRef.current.playEffect("whoosh", 0.3);
    }, []);
    const playReveal = useCallback(() => {
        managerRef.current.playEffect("reveal", 0.5);
    }, []);
    const playPop = useCallback(() => {
        managerRef.current.playEffect("pop", 0.4);
    }, []);
    const playBoom = useCallback(() => {
        managerRef.current.playEffect("boom", 0.6);
    }, []);
    const fadeOut = useCallback((duration?: number) => {
        managerRef.current.fadeOutBgMusic(duration);
    }, []);
    const setBgVolume = useCallback((vol: number) => {
        managerRef.current.setBgVolume(vol);
    }, []);
    return { startMusic, playType, playWhoosh, playReveal, playPop, playBoom, fadeOut, setBgVolume };
};
