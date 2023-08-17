import {Poppins} from 'next/font/google'
import '@styles/globals.css'




const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})
export const metadata = {
  title: "Timmy",
  description: "Seeking to learn Next.js",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>

        <main>{children}</main> 
      </body>
    </html>
  );
};

export default RootLayout;
