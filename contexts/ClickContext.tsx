import React from 'react';

/**
 * click context type.
 */
export type ClickContextType = {
  /** number of clicks */
  nbClick: number;
  /** modifier */
  increment: () => void;
  /** modifier */
  decrement: () => void;
};

/**
 * Create the context
 */
const ClickContext = React.createContext<ClickContextType | undefined>(
  undefined
);

const useClickContext = (): ClickContextType => {
  const context = React.useContext(ClickContext);
  if (!context) {
    throw new Error(
      `useClickContext must be used within a ClickContextProvider`
    );
  }
  return context;
};

const ClickContextProvider = (props) => {
  const [nbClick, setNbClick] = React.useState<number>(0);
  const value = React.useMemo(
    () => ({
      nbClick,
      increment: () => setNbClick(nbClick + 1),
      decrement: () => setNbClick(nbClick - 1),
    }),
    [nbClick]
  );
  return <ClickContext.Provider value={value} {...props} />;
};

export { ClickContextProvider, useClickContext };