import {Ovo,Outfit} from 'next/font/google'
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit=Outfit({  
 subsets:["latin"],
 weight:[ "400", "500", "600", "700"]
 
})
const ovo=Ovo({
  subsets:["latin"],
  weight:["400"]
})



export const metadata = {
  title:{
    template:"%s | Personal Portfolio",
    default:"Personal Portfolio"
  },
  description:""
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-6 overflow-x-hidden` }>
        <Navbar/> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
