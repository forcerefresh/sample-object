import { RGBColor } from "webslider-sdk/lib/utils/i-rgb-color";

/**
 * This is object unique id. This have to be unique string.
 * To avoid name overlapping use Reverse Domain Name Notation as a prefix.
 */
export const OBJECT_UID = "io.webslider.sample-object";

/**
 * Values are output of Properties Panel form that follow object tuple definition
 */
export interface ObjectValues {
  sampleTextInput: string;
  sampleSlider: number;
  sampleCheckbox: boolean;
  sampleColor: RGBColor;
}
