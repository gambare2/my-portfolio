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

function Certificate() {
  const openPDF = (fileid) => {
    window.open(`https://drive.google.com/file/d/${fileid}/view`, '_self');
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {certifyDrive.map(({ fileid, name, date, course }, index) => (
        <div
          key={index}
          onClick={() => openPDF(fileid)}
          className="cursor-pointer bg-teal-100 hover:bg-teal-200 transition-shadow rounded-xl shadow-md overflow-hidden flex flex-col"
        >
          <div className="aspect-video">
            <object
              data={`https://drive.google.com/file/d/${fileid}/preview?rm=minimal`}
              type="application/pdf"
              className="w-full h-full"
            />
          </div>

          <div className="p-4 text-slate-800 space-y-1">
            <h3 className="text-xl font-bold text-center">{name}</h3>
            <p className="text-sm">📅 Date: {date}</p>
            <p className="text-sm">🎓 Course: {course}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Certificate
