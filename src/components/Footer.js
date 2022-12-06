import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="text-center">
            <footer>
                <p className="text-muted">{year} Stefan Wendt</p>
            </footer>
        </div>
    );
}

export default Footer