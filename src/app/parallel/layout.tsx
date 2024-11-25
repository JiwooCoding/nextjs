import Link from "next/link";
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
    sidebar: React.ReactNode;
    feed:React.ReactNode;
}

const Layout = ({children, sidebar, feed}:LayoutProps) => {
    return (
        <div>
            <div>
                <Link href={'/parallel'}>parallel</Link>
                &nbsp;
                &nbsp;
                <Link href={'/parallel/setting'}>parallel/setting</Link>
            </div>
            <br />
            {feed}
            {sidebar}
            {children}
        </div>
    )
}

export default Layout