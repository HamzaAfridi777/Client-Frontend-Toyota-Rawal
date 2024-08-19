import { useEffect } from 'react';
import intlTelInput from 'intl-tel-input';

const useIntlTelInput = (inputRef, options) => {
  useEffect(() => {
    let iti;

    const initIntlTelInput = async () => {
      if (inputRef.current) {
        try {
          iti = intlTelInput(inputRef.current, options);
        } catch (error) {
          console.error("Error initializing intlTelInput:", error);
        }
      }
    };

    initIntlTelInput();

    return () => {
      if (iti) iti.destroy();
    };
  }, [inputRef, options]);
};

export { useIntlTelInput };
