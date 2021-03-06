import { Channels, FloatArray } from "../utils";

/**
 * AnalyserAdapter adapts music data analysers so that it can be plugged into Webvs.
 *
 * Implement this to send music data into webvs
 */
export default abstract class AnalyserAdapter {
    // boolean value indicating whether a beat
    // is in progress or not
    public abstract isBeat(): boolean;

    // Called every frame. Override and implement analyser code
    public abstract update(): void;

    // Returns array of waveform values
    public abstract getWaveform(channel?: Channels): FloatArray;

    // Returns array of spectrum values
    public abstract getSpectrum(channel?: Channels): FloatArray;
}
