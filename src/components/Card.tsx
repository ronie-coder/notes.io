import React from 'react'

const Card = ({cardDetails}) => {
  console.log(cardDetails)
  return (
    <div className="flex h-fit  flex-col max-w-64 bg-white border shadow-sm rounded-xl dark:bg-[#1f2937] dark:border-neutral-700 dark:shadow-neutral-700/70">
  <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-[#1f2937] dark:border-neutral-700">
    <p className="mt-1 text-sm text-white dark:text-white">
      {cardDetails.title}
    </p>
  </div>
  <div className="p-4 md:p-5">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
      {cardDetails.cardtitle}
    </h3>
    <p className="mt-2 text-gray-500 dark:text-neutral-400">
      {cardDetails.cardDescription}
    </p>
    <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
      Card link
      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>  
    </a>
  </div>
</div>
  )
}

export default Card