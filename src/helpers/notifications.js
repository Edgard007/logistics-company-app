import { notification } from "antd";

/**
 * Component to display customised notifications
 * @param {string} msm Text to display
 * @param {string} description Text to display
 * @param {'success' | 'info' | 'warning' | 'error'} [type] Alert type
 */
const alertNotification = (msm, description, type) => {
  const defaultDesc =
    "An error has arisen, we are working to fix it. Please try again later.";
  const content = description ? description : defaultDesc;
  notification[type]({
    message: msm,
    description: content,
    duration: 5,
    top: 40,
  });
};

export { alertNotification };
