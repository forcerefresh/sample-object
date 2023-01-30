/**
 * This is a entry point for Object used in Web Slider App.
 */

import { OBJECT_UID } from "./src/object-types";
import { postProcess } from "./src/object-player";
import {
  createObject,
  getAssetsUrls,
  getHtmlForApp,
  objectMeta,
} from "./src/object-app";
import { IObjectAppDefinition } from "webslider-sdk/lib/objects/objects-register";
import { addAppObjectToGlobalScope } from "webslider-sdk/lib/objects/object-utils";
import {
  LoggerDomain,
  showLoggerUsage,
} from "webslider-sdk/lib/utils/logger/logger";

// This output a list of available log levels and how to use them for logging in Object
// Development: I the development mode all logs levels messages are visible
// Production: In the production build there will be only visible error and fatal log level messages
showLoggerUsage(LoggerDomain.Object);

export const ObjectDefinition: IObjectAppDefinition = {
  type: OBJECT_UID,
  group: "media",
  meta: objectMeta,
  createObject,
  getHtml: getHtmlForApp,
  postProcess,
  getAssetsUrls,
};

// Object adds itself to global scope in order to be used by Web Slider
addAppObjectToGlobalScope(OBJECT_UID, ObjectDefinition);
