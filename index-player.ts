/**
 * This is a entry point for Object used in Web Slider Player.
 */

import { addPlayerObjectToGlobalScope } from "webslider-sdk/lib/objects/object-utils";
import { IObjectDefinition } from "webslider-sdk/lib/objects/objects-register";
import { SAMPLE_OBJECT } from "./src/sample-object-types";
import {
  objectStart,
  objectStop,
  getHtml,
  preload,
  sizeUpdate,
  PRELOAD_ORDER,
} from "./src/sample-object-player";

export const ObjectDefinition: IObjectDefinition = {
  type: SAMPLE_OBJECT,
  getHtml,
  sizeUpdate,
  preload,
  execStart: objectStart,
  execStop: objectStop,
  preloadOrder: PRELOAD_ORDER,
};

// Object adds itself to global scope in order to be used by Web Slider
addPlayerObjectToGlobalScope(SAMPLE_OBJECT, ObjectDefinition);
