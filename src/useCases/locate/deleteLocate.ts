import { createClient } from '@/services/supabase/client'
import { useMutation } from '@tanstack/react-query'

export function useDeleteLocate() {
  const supabase = createClient()

  const {
    mutateAsync: deleteLocate,
    isPending,
    error,
    data,
    isSuccess,
  } = useMutation({
    mutationKey: ['removeLocate'],
    mutationFn: async (id: string) => {
      const { data, error } = await supabase
        .from('locate')
        .delete()
        .eq('id', id)

      if (error) {
        throw new Error(error.message)
      }

      return data
    },
  })

  return {
    deleteLocate,
    isPending,
    error,
    data,
    isSuccess,
  }
}
