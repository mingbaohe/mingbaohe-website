import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '深圳市铭宝和科技有限公司',
  description: '智能科技，引领未来 - 深圳市铭宝和科技有限公司致力于为客户提供智能化解决方案',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
} 