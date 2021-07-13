import styles from '../../styles/AboutUs.module.css'
const AboutUs = () =>{
    return(
        <>
            <div className={styles.about}>
            
            <div className={styles.div}>
            <p className={styles.p}>We are fighting the century's biggest health and financial crisis. As enemies attack us, our brave soldiers are fighting the battle on the border to defend us; and our tenacious farmers working round the clock to feed us and our families; and our healthcare workers are keeping us safe and healthy. But even in these challenging times, we have a great opportunity in our hands to serve our people and motherland.<br/><br/>
      
            When we are locked-down, the most affected are the children of our farmers and poorest section of rural India, who work as migrants in the cities/towns to build our roads, buildings and factories for our and our nation's prosperity. They are in a state of disarray.<br/><br/>
      
            They had gone back home to the rural hinterlands of our nation to save their lives. They had walked , cycled or gone on roads/railways in trucks/lorries/Shramik train. Reaching back at home in their rural small hut, they find no source of livelihood near home - family needs food, old and sick parents need medicine and children need education.
<br/><br/>
            
We have come together to fight this crisis and serve the poorest with this initiative!<br/><br/>
            
MoSahay app is a social initiative by IITians and other leading professionals to get migrants back to work. Most companies now acutely require workers and most migrants desperately need their livelihood back. MoSahay aims to bridge the gap while mitigating the health risks. We want to help our migrant brothers and sisters to reclaim their livelihood and dignity.</p>
            <h2 className={styles.h2}>MoSahay is not just an app; but a social movement!</h2>
            <ul className={styles.ul}>
                <li>For moving back to work in India and abroad MoSahay will help</li>
                <li>For reskilling and upskilling,we will work with skills parterns</li>
                <li>For developing self-employment solutions in native places of workers, we have partnered with Mart Global Solutions, India's leading consulting firm specialised in the rural economy</li>
            </ul>
                <h2 className={styles.h2}>Our Tech Advantage</h2>
                <ul className={styles.ul}>
                    <li>Simplicity: Easy Android & web interface for 2 simple forms – Skill Card and Health Card.</li>
                    <li>Modular: DevOps with microservices based architecture.</li>
                    <li>Interoperable: Open platform architecture with APIs</li>
                    <li>Scalable:Cloud native development.</li>
                    <li>Security: Secure cloud data storage.</li>
                    <li>Data privacy: Adherence to rigorous GDPR standards.</li>
                    <li>Multi-lingual: Currently supports Hindi, English and Odia. Other Indian languages under development.</li>
                </ul>
           
                </div>
                {/* <div>
                    <img src="img4.gif" className={styles.imgp}/>
                </div> */}
        </div>
        </>
    )
}

export default AboutUs;