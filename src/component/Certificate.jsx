import React from 'react'
import { Box } from '@mui/material'
import { NavLink } from 'react-router'

const certifyDrive = [
  {
    fileid: '1ECtUr95eL6GNraAjaiFcWbgPaWv_q63r',
    name: 'Python Masterclass',
    date: '21-June, 2025',
    course : 'Udemy'
  },
  {
    fileid: '19a0zKx_vuEnsV3-Ls2T33PtjIwg09jKC',
    name: 'Python Certificate',
    date: '24-May, 2025',
    course : 'Udemy'
  },
  {
    fileid: '1rjVGSXGA6PO69GSsO0yJN93zY-x5zVi7',
    name: 'Javascript Certificate',
    date: '16-June, 2025',
    course : 'Udemy'
  }
]

function certificate() {
   const openPDF = (fileid) => {
    window.open(`https://drive.google.com/file/d/${fileid}/view`, '_self');
  };
  return (
    <div className='flex flex-row gap-3'>
      {certifyDrive.map(({ fileid, name, date, course }, index) => (
        <div className='overflow-hidden cursor-pointer md:px-4 md:py-3 bg-teal-200 text-slate-800'
        key={index}
        onClick={()=> openPDF(fileid)}>
      <object
      
      data={`https://drive.google.com/file/d/${fileid}/preview?rm=minimal`}
      type='application/pdf'
      >
        
      </object>
      <div className='text-sm text-slate-800 flex flex-col'>
        <span 
      className='text-2xl font1 text-center'>{name}</span>
      <span>Date: {date}</span>
      <span>By: {course}</span>
      </div>
    </div>
      ))}
    </div>
  )
}

export default certificate
