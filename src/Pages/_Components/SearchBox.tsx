import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function SearchBox() {
  return (
    <div className='ml-10 flex items-center gap-2 w-[500px] p-2 rounded-md bg-slate-100'>
        <Search />
        <Input type="text" className='bg-white-100' placeholder="Search" />
    </div>
  )
}

export default SearchBox