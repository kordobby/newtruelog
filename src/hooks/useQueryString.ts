import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const useQueryString = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set(name, value);
    return params.toString();
  };

  const setQueryString = (name: string, value: string) => {
    const queryString = createQueryString(name, value);
    const path = `${pathname}?${queryString}`;
    router.push(path);
  };

  const clearQueryString = () => {
    router.replace(pathname);
  };
  return { setQueryString, clearQueryString };
};

export default useQueryString;
