export default function NavPage({page, setPage}) {
  return (
    <header className="d-flex justify-content-between align-items-center sticky-top pt-2">
      <h4>Page: {page}</h4>
      <button className="btn btn-primary" onClick={() => setPage(page + 1)}>Page {page + 1}</button>
    </header>
  )
}