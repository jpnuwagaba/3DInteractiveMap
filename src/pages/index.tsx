import Image from 'next/image'
import { Inter } from 'next/font/google'
import ModelContainer from '@/components/ModelContainer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <ModelContainer />
    </div>
  )
}
