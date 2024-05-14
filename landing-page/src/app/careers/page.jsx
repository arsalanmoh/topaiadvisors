'use client';

import { CareerList } from '@/components/CareerList'
import { CareerHeading} from '@/components/CareerHeading'

function CareerPage() {
  return (
    <>
      <main>
        <CareerHeading/>
        <CareerList/>
      </main>
    </>
  )
}
export default CareerPage;