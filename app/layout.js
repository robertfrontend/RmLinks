import './globals.css'

export const metadata = {
  title: 'RmLinks · @robertfrontend',
  description: 'Links de Robert Romero — Frontend Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
