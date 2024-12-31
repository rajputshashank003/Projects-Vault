import React from 'react'

function Footer() {
    return (
        <footer className="bg-white rounded-md shadow mt-0 dark:bg-neutral-700">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://chessv.netlify.app/" className="hover:underline">ChessV</a> All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://linkedin.com/in/rajputshashank" className="hover:underline me-4 md:me-6">LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/rajputshashank003" className="hover:underline me-4 md:me-6">Github</a>
                </li>
                <li>
                    <a href="https://github.com/rajputshashank003/ReviewsTemplate" className="hover:underline me-4 md:me-6">Project Repository</a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/rajputshashank" className="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
        </footer>
    )
}

export default Footer
