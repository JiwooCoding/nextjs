"use client"

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react"

const Error = ({error, reset}:{error:Error, reset:()=>void}) => {
    useEffect(() => {
        console.log(error.message);
    }, [error]);

    const router = useRouter();
    
    return (
        <div>
            <h3>Error가 발생했습니다</h3>
            <button onClick={() => {
                startTransition(() => {
                    router.refresh() // 현재 페이지에 필요한 서버 컴포넌트들을 다시 불러옴
                    reset()
                })
                }}>다시 시도</button>
        </div>
    )
}

export default Error