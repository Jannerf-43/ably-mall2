import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Button variant={'default'} size={'lg'}>
        Click me
      </Button>
      <Button>Click me</Button>
      <Button variant={'secondary'} size={'lg'}>
        Click me
      </Button>
      <Button variant={'ghost'} size={'lg'}>
        Click me
      </Button>
    </div>
  )
}
