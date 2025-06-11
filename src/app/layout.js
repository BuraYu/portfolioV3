import "./globals.css";
import "./styles/modal.css";

export const metadata = {
  title: "Burak Yüksel",
  description: "Personal Website of Burak Yüksel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="__next">{children}</div>
      </body>
    </html>
  );
}
