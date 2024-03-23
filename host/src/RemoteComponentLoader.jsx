import React, { useState, useEffect, Suspense, useMemo } from 'react';

const dynamicImport = async (url, modulePath, setComponentCallback) => {
  try {
    const module = await import(/* @vite-ignore */ url);
    const { get: getFederatedModule } = module;
    const componentFactory = await getFederatedModule(modulePath);
    const Component = componentFactory();
    // Use the callback to update the state in the RemoteComponentsLoader component
    setComponentCallback(Component ?? Component.default);
  } catch (error) {
    console.error(`Failed to load component from ${url}:`, error);
    // Update the state with an error component
    setComponentCallback(() => () => <div>Error loading component.</div>);
  }
};



const RemoteComponentsLoader = ({ remoteConfigs }) => {
    const [components, setComponents] = useState([]);
  
    // Create a stable dynamic import function using useMemo
    const stableDynamicImport = useMemo(() => dynamicImport, []);


  
    useEffect(() => {
      remoteConfigs.forEach(config => {
        stableDynamicImport(config.url, config.name, (importedComponent) => {
          // Prevent adding duplicate components
          setComponents(prevComponents => {
            const isExistingComponent = prevComponents.some(comp => comp.name === importedComponent.name);
            return isExistingComponent ? prevComponents : [...prevComponents, importedComponent];
          });
        });
      });
      // Adding stableDynamicImport to the dependencies array to ensure it's considered by useEffect
    }, [remoteConfigs, stableDynamicImport]);
  
    return (
      <div>
        {components.map((Component, ) => (
          <Suspense key={Component.name} fallback={<div>Loading component...</div>}>
            <Component />
          </Suspense>
        ))}
      </div>
    );
  };
  
  export default RemoteComponentsLoader;


