import style from './styles.module.css'

export const metadata = {
  title: 'About',
  description: 'Dhruva About page.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <div className={style.main}>
            {children}
        </div>
    </>
  )
}