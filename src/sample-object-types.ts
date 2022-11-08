import { RGBColor } from "webslider-sdk/lib/utils/i-rgb-color";

/**
 * This is object unique id. This have to be unique string.
 * To avoid name overlapping use Reverse domain name notation as a prefix.
 */
export const SAMPLE_OBJECT = "sample-object";

/**
 * Values are output of Properties Panel form that follow object tuple definition
 */
export interface SampleObjectValues {
  sampleTextInput: string;
  sampleSlider: number;
  sampleCheckbox: boolean;
  sampleColor: RGBColor;
}
