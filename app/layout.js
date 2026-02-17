import '../styles/globals.css'
import { Inter, JetBrains_Mono, Orbitron } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
})

const orbitron = Orbitron({
    subsets: ['latin'],
    variable: '--font-orbitron',
})

export const metadata = {
    title: 'CDPL | Autonomous Tech Supremacy',
    description: 'Chakravyuh Dynamics (CDPL) - Pioneers in autonomous defense across Air (MAS), Sea (MMS), and Land (MGS) domains.',
}

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable}`}>{children}</body>
        </html>
    )
}

