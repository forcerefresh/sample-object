/**
 * This is a entry point for Object used in Web Slider Player.
 */

import { addPlayerObjectToGlobalScope } from "webslider-sdk/lib/objects/object-utils";
import { IObjectDefinition } from "webslider-sdk/lib/objects/objects-register";
import { OBJECT_UID } from "./src/object-types";
import {
  objectStart,
  objectStop,
  getHtml,
  preload,
  sizeUpdate,
  PRELOAD_ORDER,
} from "./src/object-player";

import { version } from "./package.json";

export const ObjectDefinition: IObjectDefinition = {
  type: OBJECT_UID,
  version: version,
  getHtml,
  sizeUpdate,
  preload,
  execStart: objectStart,
  execStop: objectStop,
  preloadOrder: PRELOAD_ORDER,
};

// Object adds itself to global scope in order to be used by Web Slider
addPlayerObjectToGlobalScope(OBJECT_UID, version, ObjectDefinition);
