import { useState, useEffect } from 'react';

export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return;
};
