export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div>
        <h1>Teddy's blogs</h1>
        <p>welcome to my tech blog</p>
        <br />
      </div>
    </header>
  )
  const footer = (
    <footer>
      <div>
        <p>Develop by Ted</p>
      </div>
    </footer>
  )
  return (
    <html>
      <head />
      <body>
        {header}
        {children}
      </body>
      {footer}
    </html>
  )
}
