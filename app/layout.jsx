import "@/assets/global.css"
import Circle from '@/components/Circle'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Simeon Davenport | Computer Programmer Portfolio',
  description: 'Generated by Next.js',
  name: "width=device-width, initial-scale=1.0"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-green-600 to-green-400 bg-fixed min-h-[100dvh] flex flex-col drop-shadow-md z-10">
        <div className="absolute inset-0 z-0">
          <Circle color="red" />
          <Circle color="blue" />
        </div>
        <Header />
        <main className="flex-1 bg-orange-200 opacity-85 rounded-[15px] p-3 w-full max-w-[1000px] mx-auto shadow-lg z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
