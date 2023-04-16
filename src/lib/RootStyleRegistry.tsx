import { useServerInsertedHTML } from 'next/navigation';
import useStyledComponentsRegistry from './useStyledComponentsRegistry';

export const RootStyleRegistry = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [StyledComponentRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();
  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>);

  return <StyledComponentRegistry>{children}</StyledComponentRegistry>;
};
