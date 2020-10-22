import React from 'react'

const Footer = () => {
    return (
        <>  
            <div className='gradient-line' />
            <footer>
                <div className='footer-container'>
                    <img src='images/footer.png' alt='bank'/>
                    <ul>
                        <li>adatkezelés</li>
                        <li>ászf</li>
                        <li>impresszum</li>
                    </ul>
                    <div className='copyright'>
                        <h1>Minden jog fentartva © 2020 Benis</h1>
                        <img src='images/lolipop.png' alt='lolipop' />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
