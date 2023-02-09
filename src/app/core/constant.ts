import * as CryptoJS from "crypto-js";
import { environment } from "environments/environment";

export const key = CryptoJS.enc.Utf8.parse(environment.encryptionKey);
export const iv = CryptoJS.enc.Utf8.parse(environment.encryptionIv);
