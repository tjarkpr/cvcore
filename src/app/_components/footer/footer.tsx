import React from "react";


export const Footer: React.FC = () => {
    return (
        <footer className="flex w-full flex-row flex-nowrap justify-between items-center p-2 font-thin" style={{fontSize: "0.625rem"}}>
            <div className="flex flex-row flex-wrap justify-start me-2">
                <p>© 2024 Tjark Prokoph | </p>
                <p>Updated: 01. July 2024</p>
            </div>
            <div className="flex flex-row flex-wrap justify-end">
                <a href="/imprint">Imprint</a>
                <a href="/data_protection"> | Data Protection</a>
                <p className="cursor-pointer inline" id="klaro_cookies_button"> | Cookies</p>
            </div>
            <script src="/footer.js"></script>
        </footer>
    )
};