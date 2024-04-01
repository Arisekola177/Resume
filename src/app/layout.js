
import "./globals.css";

export const metadata = {
  title: "Azeez Arisekola Saibu",
  description: "Web developer/Software engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         {children}
     
      </body>
    </html>
  );
}
