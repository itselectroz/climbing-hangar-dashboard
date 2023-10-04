export default function Navbar() {
  return (
    <>
      <button type="button" aria-controls="navbar" className="fixed inline-block sm:hidden top-5 left-5 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <span className="sr-only">Open navbar</span>
      </button>
      <nav id="navbar" aria-label="Navbar" className="fixed hidden sm:inline-block h-screen top-0 left-0 w-32">
        test
      </nav>
    </>
  )
}