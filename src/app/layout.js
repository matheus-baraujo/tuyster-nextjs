import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

export const metadata = {
  title: "Tuyster - To Buy Lists Faster",
  description: "List app for building materials",
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
