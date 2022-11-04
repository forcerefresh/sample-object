/**
 * This is a entry point for Object used in Web Slider App.
 */

import { SAMPLE_OBJECT } from "./src/sample-object-types";
import { postProcess } from "./src/sample-object-player";
import {
  createObject,
  getAssetsUrls,
  getHtmlForApp,
  objectMeta,
} from "./src/sample-object-app";
import { IObjectAppDefinition } from "webslider-sdk2/lib/objects/objects-register";
import { addAppObjectToGlobalScope } from "webslider-sdk2/lib/objects/object-utils";

export const ObjectDefinition: IObjectAppDefinition = {
  type: SAMPLE_OBJECT,
  group: "media",
  meta: objectMeta,
  createObject,
  getHtml: getHtmlForApp,
  postProcess,
  getAssetsUrls,
};

// Object adds itself to global scope in order to be used by Web Slider
addAppObjectToGlobalScope(SAMPLE_OBJECT, ObjectDefinition);
