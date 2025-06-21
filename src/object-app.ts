import {
  ICheckboxInput,
  IColorInput,
  InputType,
  ISliderInput,
  ITextInput,
} from "webslider-sdk/lib/inputs/i-inputs";
import { createCommonObject } from "webslider-sdk/lib/objects/create-common-object";
import { getObjectPlaceholder } from "webslider-sdk/lib/objects/object-helpers";
import {
  CreateObjectFuncReturnType,
  GetAssetsUrlFuncPropsType,
  GetAssetsUrlFuncReturnType,
  GetHtmlFuncPropsType,
  GetHtmlFuncReturnType,
  ObjectMetaType,
} from "webslider-sdk/lib/objects/objects-register";
import { logger } from "webslider-sdk/lib/utils/logger/logger";
import { ObjectValues, OBJECT_UID } from "./object-types";
import svgIcon from "../static/icon.svg";
import { convertRGBColor2RGBAString } from "webslider-sdk/lib/utils/utils";

/**
 * This is a type definition for Object properties form definition
 * Generic string values have to match with Object values interface properties names
 */
export type ObjectTuple = [
  ITextInput<"sampleTextInput">,
  ISliderInput<"sampleSlider">,
  ICheckboxInput<"sampleCheckbox">,
  IColorInput<"sampleColor">
];

/**
 * This functions generate and return new Object instance
 * It is called from app every time when you add Object from Objects panel to stage
 */
export function getObjectForm(): ObjectTuple {
  const propertiesFormDefinition: ObjectTuple = [
    {
      displayName: "Text input",
      propertyName: "sampleTextInput",
      inputType: InputType.TEXT,
      value: "",
      defaultValue: "",
    },
    {
      displayName: "Slider input",
      propertyName: "sampleSlider",
      inputType: InputType.SLIDER_INPUT,
      value: {} as any,
      defaultValue: {} as any,
      inputProps: {
        min: 0,
        max: 100,
        stepSize: 1,
        labelStepSize: 1,
      },
    },
    {
      displayName: "Checkbox input",
      propertyName: "sampleCheckbox",
      inputType: InputType.CHECKBOX,
      defaultValue: true,
      value: true,
    },
    {
      displayName: "Sample color",
      propertyName: "sampleColor",
      defaultValue: { r: 0, g: 0, b: 0, a: 1 },
      value: { r: 0, g: 0, b: 0, a: 1 },
      inputType: InputType.COLOR,
      optional: true,
    },
  ];

  return propertiesFormDefinition;
}

export function createObject(
  _initialValue?: Record<string, any>
): CreateObjectFuncReturnType<ObjectValues> {
  logger.object.debug("io.webslider.sample-object::createObject()");

  const object = createCommonObject(OBJECT_UID);

  const values: ObjectValues = {
    sampleTextInput: "",
    sampleSlider: 50,
    sampleCheckbox: false,
    sampleColor: { r: 255, g: 255, b: 255, a: 1 },
  };

  object.properties = values;

  return object;
}

/**
 * This function return html used in Web Slider App during editing
 */
export function getHtmlForApp(
  props: GetHtmlFuncPropsType
): GetHtmlFuncReturnType {
  logger.object.debug("io.webslider.sample-object::getHtmlForApp");

  const { object, calculatedObjectSize } = props;

  const values = object.properties as ObjectValues;

  const style = `background-color: ${convertRGBColor2RGBAString(
    values.sampleColor
  )};`;

  const details = `<div class="object-content" style="${style}">
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

  return getObjectPlaceholder(`SAMPLE OBJECT<br/>${details}`);
}

export const getAssetsUrls = (
  props: GetAssetsUrlFuncPropsType
): GetAssetsUrlFuncReturnType => {
  logger.object.debug("io.webslider.sample-object::getAssetsUrls");

  return [];
};

/**
 * Properties that are shown in "Web Slider App > Add Panel".
 */
export const objectMeta: ObjectMetaType = {
  name: "SAMPLE OBJECT",
  description: "Boilerplate for creating Object for Web Slider",
  icon: svgIcon,
  isEditable: true,
  supportWidthResize: true,
};
