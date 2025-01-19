import { Loader2 } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-[90vh]">
      <div className="text-center">
        <Loader2 className="w-10 h-10 animate-spin text-gray-600 mx-auto" />
        <p className="mt-4 text-gray-700 text-lg font-medium">Loading...</p>
      </div>
    </div>
  )
}

