import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function Pagination() {
    const params = useSearchParams()
    const page = parseInt(params.get('page') || '1');
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {page > 1 && <li className="page-item"><Link className="page-link" href={`/?page=${page - 1}`}>Prev</Link></li>}
                    <li className="page-item"><Link className="page-link" href="/?page=1">1</Link></li>
                    <li className="page-item"><Link className="page-link" href="/?page=2">2</Link></li>
                    <li className="page-item"><Link className="page-link" href="/?page=3">3</Link></li>
                    <li className="page-item"><Link className="page-link" href={`/?page=${page + 1}`}>Next</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination