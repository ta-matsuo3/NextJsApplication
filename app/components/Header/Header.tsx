import styles from './Header.module.css'

import React, { ReactNode } from 'react'


export default function Header({ children }: { children?: ReactNode }) {
    return (
        <>
            <div className={styles.headerWrap}>
                <a href="#"><img className={styles.logo} src='/logo.png' /></a>
                {children}
            </div>
        </>
    )
}
