import { useState, useCallback } from 'react';
import { TooltipState } from '../types';

export const useTooltip = () => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    content: '',
    x: 0,
    y: 0,
  });

  const showTooltip = useCallback((content: string, x: number, y: number) => {
    setTooltip({ visible: true, content, x, y });
  }, []);

  const hideTooltip = useCallback(() => {
    setTooltip(prev => ({ ...prev, visible: false }));
  }, []);

  return { tooltip, showTooltip, hideTooltip };
};
