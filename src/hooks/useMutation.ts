import { useMutation } from '@tanstack/react-query';
export const useMutationHooks = (callback: any) => {
  const mutation = useMutation({
    mutationFn: callback
  });
  return mutation;
}