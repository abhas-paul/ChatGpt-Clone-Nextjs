import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","200","400", "500", "600", "700"], // Choose weights you want
  display: "swap",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "ChatShot",
  description: "ChatShot is a powerful, real-time AI chatbot designed to assist, engage, and converse like a human. Whether you're looking for quick answers, thoughtful conversations, or task automation, ChatSphere is always ready. Built with cutting-edge natural language understanding, it adapts to your needs—making every interaction smoother, smarter, and more personal.",
};