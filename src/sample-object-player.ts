import {
  ExecutionCodeFuncPropsType,
  ExecutionCodeFuncReturnType,
  GetHtmlFuncPropsType,
  GetHtmlFuncReturnType,
  PostProcessFuncPropsType,
  PostProcessFuncReturnType,
  PreloadFuncPropsType,
  PreloadOrder,
  UpdateObjectSizeFuncPropsType,
} from "webslider-sdk2/lib/objects/objects-register";
import { logger } from "webslider-sdk2/lib/utils/logger/logger";
import { rgbColor2cssRgba } from "webslider-sdk2/lib/objects/common-properties";
import { IInputMetadataValues } from "webslider-sdk2/lib/inputs/i-inputs";

import { SampleObjectValues } from "./sample-object-types";

/**
 * This function return html used in Web Slider Player
 */
export function getHtml(props: GetHtmlFuncPropsType): GetHtmlFuncReturnType {
  logger.debug(`Sample object: getHtml()`);

  const { object, calculatedObjectSize } = props;

  // Note: object.definition.values contain values that are set from Properties Panel
  const values = object.definition.values as SampleObjectValues;
  const metaValues = object.definition.valuesMetadata as {
    [key: string]: IInputMetadataValues;
  };

  let style = "";
  if (!metaValues.sampleColor.disabled) {
    style = `background-color: ${rgbColor2cssRgba(values.sampleColor)} ;`;
  }

  return `<div class="object-content" style="${style}">
        SampleText value: ${values.sampleTextInput}<br/>
        SampleSlider value ${values.sampleSlider}<br/>
        SampleCheckbox value: ${
          values.sampleCheckbox ? "CHECKED" : "NOT CHECKED"
        }<br/>
        Left: <span class="object-left-${object.id}">${
    calculatedObjectSize.left
  }</span><br/>
        Top: <span class="object-top-${object.id}">${
    calculatedObjectSize.top
  }</span><br/>
        Width: <span class="object-width-${object.id}">${
    calculatedObjectSize.width
  }</span><br/>
        Height: <span class="object-height-${object.id}">${
    calculatedObjectSize.height
  }</span><br/>
      </div>`;
}

/**
 * This function is called on a browser viewport resize
 * Web Slider Player calculate new size of object and provide it through calculatedObjectSize property
 * Common use case is to update Object's html element size
 */
export async function sizeUpdate(
  props: UpdateObjectSizeFuncPropsType
): Promise<void> /*UpdateObjectSizeFuncReturnType*/ {
  logger.debug(`Sample object: sizeUpdate()`);

  const { id, calculatedObjectSize, className, values } = props;

  const els = document.getElementsByClassName(className); // insted of className we can use: `object-${id}`
  const objectDiv = els[0] as HTMLDivElement;

  const leftSpan = objectDiv.getElementsByClassName(
    `object-left-${id}`
  )[0] as HTMLSpanElement;
  const topSpan = objectDiv.getElementsByClassName(
    `object-top-${id}`
  )[0] as HTMLSpanElement;
  const widthSpan = objectDiv.getElementsByClassName(
    `object-width-${id}`
  )[0] as HTMLSpanElement;
  const heightSpan = objectDiv.getElementsByClassName(
    `object-height-${id}`
  )[0] as HTMLSpanElement;

  leftSpan.innerHTML = calculatedObjectSize.left;
  topSpan.innerHTML = calculatedObjectSize.top;
  widthSpan.innerHTML = calculatedObjectSize.width;
  heightSpan.innerHTML = calculatedObjectSize.height;
}

/**
 * This function preload asset used by Object
 * e.g: Image, Video, Font, and other assets.
 */
export async function preload(
  props: PreloadFuncPropsType
): Promise<string> /*PreloadFuncReturnType*/ {
  logger.debug(`Sample object: preload()`);

  const { id } = props;

  return id;
}

/**
 * This function execute when timeline starts
 */
export function objectStart(
  props: ExecutionCodeFuncPropsType
): ExecutionCodeFuncReturnType {
  logger.debug(`Sample object: objectStart()`);
}

/**
 * This function execute when timeline stop
 */
export function objectStop(
  props: ExecutionCodeFuncPropsType
): ExecutionCodeFuncReturnType {
  logger.debug(`Sample object: objectStop()`);
}

/**
 * This function is execute after every change in Properties Panel.
 * Good example of use is "autoHeight" for Text Object as we are calculating Object height to fit all text.
 */
export function postProcess(
  props: PostProcessFuncPropsType
): PostProcessFuncReturnType {
  logger.debug(`Sample object: postProcess()`);

  const { object } = props;
  return props.object;
}

/**
 * When object has preload implementation and use "preload()" function to preload required assets, its required to set preload order
 * There are three preload groups: FIRST, MIDDLE and LAST.
 * Player engine preload assets group by group.
 */
export const PRELOAD_ORDER: PreloadOrder = PreloadOrder.FIRST;
