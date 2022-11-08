//* ==> UseDataApi <== *//
import { requestApi } from "../../config/useDataApi";

//* ==> Paths <== *//
import { packages } from "../../config/paths";

// ==> Helpers
import { alertNotification } from "../../helpers/notifications";

/**
 * Method to obtain list of packages
 */
const getPackages = async () => {
  try {
    const result = await requestApi(packages);
    const { ok, data } = result;
    if (ok) return data || [];
    else {
      alertNotification("Error", "Error getting the list of packages", "error");
      return [];
    }
  } catch (e) {
    console.error("||* ==> Error getPackages <== *||", e);
    alertNotification("Error", "Error getting the list of packages", "error");
    return [];
  }
};

/**
 * Method to obtain list of packages
 */
const savePackages = async (body) => {
  try {
    const result = await requestApi(packages, "POST", body);
    const { ok } = result;
    if (ok) return ok;
    else return ok;
  } catch (e) {
    console.error("||* ==> Error savePackages <== *||", e);
    alertNotification("Error", "Error saving information", "error");
    return [];
  }
};

export { getPackages, savePackages };
