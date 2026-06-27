import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" />
      <div className="container relative text-center">
        <p className="eyebrow eyebrow-center">Page not found</p>
        <h1 className="mt-6 font-serif text-7xl font-semibold leading-none text-gold sm:text-9xl">404</h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-sand/80">
          This dish isn’t on the menu. Let’s get you back to something delicious.
        </p>
        <div className="mt-9 flex justify-center gap-3">
          <Button to="/" variant="primary" arrow>Back home</Button>
          <Button to="/menu" variant="outline">View menu</Button>
        </div>
      </div>
    </section>
  )
}
