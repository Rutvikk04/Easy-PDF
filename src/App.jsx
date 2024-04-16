import { useState } from 'react';
import ReactQuill from 'react-quill';
import { usePDF } from 'react-to-pdf';
import 'react-quill/dist/quill.snow.css';
import modules from './Utils/quillFormat';
const App = () => {
   const { toPDF, targetRef } = usePDF({ filename: 'EasyPDF.pdf' });
   const [value, setValue] = useState('<h1><strong>Welcome To Easy PDF</strong>...</h1><p><br></p><p>Are You tired of converting .txt file and then convert it into a PDF. Its very long process, right ?. So Here is the Solution.</p><p><br></p><p><br></p><h2>What Easy PDF can do:</h2><ul><li>just create a PDF in text editor...</li><li>click to generate PDF</li><li>Enjoy Your PDF</li></ul><p><br></p><p><br></p><p>So , Its that Easy to generate custom PDF...</p><p><br></p><p>Thank you for Reading this..</p><p><strong>Rutvik Amarcholi</strong></p>')
   const [pdfView, setPdfView] = useState(false)

   return (
      <section className=' space-y-4 bg-gradient-to-b from-blue-950 via-slate-700 to-slate-950 h-screen flex flex-col items-center justify-center'>
         <div className='logo& description my-5 text-center space-y-2 '>
            <span className='p-2 text-6xl font-medium italic bg-gradient-to-r from-red-400 via-blue-500 to-green-500 bg-clip-text text-transparent animate-pulse'>Easy PDF</span>
            <p className='text-white '>
               <span className='font-semibold text-xl'>Tired of converting .txt file into PDF?</span> <br />
               Easy PDF is a PDF generator tool. Here you can generate quick PDF according to your Need..</p>

         </div>
         <div className='bg-white rounded-md shadow-lg shadow-blue-200 max-w-[50rem] m-2  overflow-y-scroll  max-h-96'>
            <ReactQuill className='quill  px-4 py-2' modules={modules} theme="snow" value={value} onChange={setValue} />
         </div>
         <button className='bg-blue-900 hover:bg-blue-800 duration-200 font-semibold p-2 text-white border border-white rounded-md' onClick={async () => { await setPdfView(true); await toPDF(); setPdfView(false) }}>Generate PDF</button>
         {
            pdfView &&
            <div id='pdf' dangerouslySetInnerHTML={{ __html: value }} ref={targetRef} />
         }
         {/* <textarea type='text' value={value} onChange={(e) => setValue(e.target.value)} /> */}
      </section>
   )
}
export default App