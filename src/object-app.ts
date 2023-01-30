import {
  ICheckboxInput,
  IColorInput,
  InputType,
  ISliderInput,
  ITextInput,
} from "webslider-sdk/lib/inputs/i-inputs";
import { createCommonObject } from "webslider-sdk/lib/objects/create-common-object";
import { getObjectPlaceholder } from "webslider-sdk/lib/objects/object-helpers";
import { guid } from "webslider-sdk/lib/utils/guid";
import {
  CreateObjectFuncPropsType,
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
export function createObject(
  props: CreateObjectFuncPropsType
): CreateObjectFuncReturnType<ObjectTuple> {
  logger.object.debug("io.webslider.sample-object::createObject()");

  const object = createCommonObject(OBJECT_UID);

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

  const values: ObjectValues = {
    sampleTextInput: "",
    sampleSlider: 50,
    sampleCheckbox: false,
    sampleColor: { r: 255, g: 255, b: 255, a: 1 },
  };

  return {
    ...object,
    definition: {
      id: guid(),
      type: OBJECT_UID,
      properties: propertiesFormDefinition, // TODO: check if need to be renamed
      values,
      valuesMetadata: {
        sampleColor: { exportForWizard: false, disabled: true },
      },
    },
  };
}

/**
 * This function return html used in Web Slider App during editing
 */
export function getHtmlForApp(
  props: GetHtmlFuncPropsType
): GetHtmlFuncReturnType {
  logger.object.debug("io.webslider.sample-object::getHtmlForApp");

  const { object, calculatedObjectSize } = props;

  // Note: object.definition.values contain values that are set from Properties Panel
  const values = object.definition.values as ObjectValues;

  if (!values.sampleTextInput) {
    return getObjectPlaceholder(
      `SAMPLE OBJECT<br/>(Please add some text in Sample text field)`
    );
  } else {
    return getObjectPlaceholder(`SAMPLE OBJECT<br/>${values.sampleTextInput}`);
  }
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
};
