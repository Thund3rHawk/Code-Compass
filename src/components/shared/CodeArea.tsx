import React from 'react'
import { Button } from '../ui/button'
import { CodeNav } from './CodeNav'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const CodeArea = () => {
  return (
    <>
        <div className='h-2/3 w-1/2 rounded-md m-5 bg-[#F9FAFB]'>
            <CodeNav/>
            <div className='m-2 bg-white'>
                {/* that should be the codearea */}
            </div>
        </div>
        <Button> 
            <AutoAwesomeIcon className='text-orange-300'/>
            Analyze Code
        </Button>
    </>
  )
}

export default CodeArea