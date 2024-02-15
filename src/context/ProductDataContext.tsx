import React, { createContext, ReactNode, useContext, useState } from 'react';

// Define the type for the context value
interface DataContextValue {
  product: string;
  updateProductCategory: (data: string) => void;
}

// Create the context
export const DataContext = createContext<DataContextValue | undefined>(
  undefined
);

// Define the type for the DataProvider props
interface DataProviderProps {
  children: ReactNode;
}

// Create a provider component
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [product, setProduct] = useState<string>('test');

  const updateProductCategory = (data: string) => {
    setProduct(data);
  };

  return (
    <DataContext.Provider value={{ product, updateProductCategory }}>
      {children}
    </DataContext.Provider>
  );
};

// Create a custom hook to use the DataContext
export const useDataContext = (): DataContextValue => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
