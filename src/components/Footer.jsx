export default function Footer() {
  return (
    <footer className="relative z-10 py-8"
      style={{ borderTop:'1px solid rgba(200,218,209,0.6)', background:'rgba(255,255,255,0.45)' }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm font-bold" style={{ color:'#2D4035' }}>
          Vasuki<span style={{ color:'#5F8F78' }}>.</span>
        </p>
        <p className="text-xs" style={{ color:'#8A9E94' }}>
          © {new Date().getFullYear()} Vasuki Nagesh Naik · Built with React &amp; Tailwind CSS
        </p>
        <div className="flex gap-5">
          {['about','projects','contact'].map(l => (
            <button key={l}
              onClick={() => document.querySelector(`#${l}`)?.scrollIntoView({ behavior:'smooth' })}
              className="text-xs capitalize transition-colors duration-200"
              style={{ color:'#8A9E94' }}
              onMouseEnter={e => e.target.style.color='#3F6F59'}
              onMouseLeave={e => e.target.style.color='#8A9E94'}
            >{l}</button>
          ))}
        </div>
      </div>
    </footer>
  )
}
