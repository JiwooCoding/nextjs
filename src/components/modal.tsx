"use client"

import React, { useEffect, useRef } from 'react'
import styles from './modal.module.css'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'

const Modal = ({children}:{children:React.ReactNode}) => {

    const dialogRef = useRef<HTMLDialogElement>(null);
    const router = useRouter();

    useEffect(() => {
        if(!dialogRef.current?.open){
            dialogRef.current?.showModal();
            dialogRef.current?.scrollTo({
                top:0,
            });
        }
    }, [])
    

    return createPortal(
        <dialog 
            className={styles.modal}
            ref={dialogRef}
            onClick={(e) => {
                //모달의 배경 클릭하면 뒤로가기
                if((e.target as any).nodeName === 'DIALOG'){
                    router.back(); 
                }
            }}
            onClose={() => router.back()}
        >
            {children}
        </dialog>, 
        document.getElementById('modal-root') as HTMLElement
    )
}

export default Modal