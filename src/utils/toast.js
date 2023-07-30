//* LIBRARY
import { useToast } from 'vue-toastification';

//* CONFIGS
import { TIME } from '../configs';

// Option toast Vue
const option = {
  // Your custom options for warning toast
  duration: TIME._5_SECOND, // Duration in milliseconds for how long the toast should be visible (5 seconds in this example).
  position: 'top-right', // Position of the toast on the screen (top-right in this example).
  theme: 'dark', // Custom theme for the toast (dark in this example).
  closeOnClick: true, // Close the toast when clicking on it (true in this example).
};

// The 'toast' object is obtained from the 'useToast' hook, which is presumably provided by a library (e.g., a Toast component).
const toast = useToast();

// Function to show a success toast with a given message.
// It calls the 'toast.success' method, passing the 'message' as the first argument, and an empty object as the second argument.
// The second argument is for custom options, but in this case, no additional options are provided.
export const showSuccessToast = (message) => {
  toast.success(message, option);
};

// Function to show a warning toast with a given message.
// It calls the 'toast.warning' method, passing the 'message' as the first argument, and an object containing custom options as the second argument.
// You can customize the appearance and behavior of the warning toast by providing the necessary options in the object.
export const showWarningToast = (message) => {
  toast.warning(message, option);
};

// Function to show an error toast with a given message.
// It calls the 'toast.error' method, passing the 'message' as the first argument, and an object containing custom options as the second argument.
// You can customize the appearance and behavior of the error toast by providing the necessary options in the object.
export const showErrorToast = (message) => {
  toast.error(message, option);
};

// Function to show an info toast with a given message.
// It calls the 'toast.info' method, passing the 'message' as the first argument, and an object containing custom options as the second argument.
// You can customize the appearance and behavior of the info toast by providing the necessary options in the object.
export const showInfoToast = (message) => {
  toast.info(message, option);
};
