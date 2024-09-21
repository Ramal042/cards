import './Card.css'

export default function Card(){
     function handleCardClick(event){
        event.target.querySelectorAll(".card").forEach(card => card.classList.remove("active"));

        event.target.closest(".card").classList.add("active");
     }
     return (
        <>
        <div onClick={handleCardClick} className="div-cards">
            <div><h1></h1></div>
            <div className='card'>
                <p>Starter  </p>
                <h1>Free</h1>
                <p>1 Website</p>
                <p>5 GB Hosting</p>
                <p>Limited Support</p>
                <button>Get Started</button>
            </div>
            <div className='card'>
                <p>Premium</p>
                <h1>$29/month</h1>
                <p>10 Websitec</p>
                <p>15 GB Hostingc</p>
                <p>Premium Supportc</p>
                <button>Get Started</button>
            </div>
            <div className='card'>
                <p>Enterprise</p>
                <h1>$49/month</h1>
                <p>Unlimited Website</p>
                <p>50 GB Hosting</p>
                <p>Premium Support</p>
                <button>Get Started</button>
            </div>
        </div>
        </>
     )
}