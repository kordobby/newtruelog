import React from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const useStyledComponentsRegistry = () => {
  const [styledComponentsStyleSheet] = React.useState(
    () => new ServerStyleSheet(),
  );

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  };

  const StyledComponentRegistry = ({
    children,
  }: {
    children: React.ReactNode;
  }) => (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children as React.ReactElement}
    </StyleSheetManager>
  );

  return [StyledComponentRegistry, styledComponentsFlushEffect] as const;
};

export default useStyledComponentsRegistry;
