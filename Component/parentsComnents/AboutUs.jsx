import styles from '../../styles/AboutUs.module.css'
const AboutUs = () =>{
    return(
        <>
            <div className={styles.about}>
            
            <div className={styles.div}>
            <p className={styles.p}>We are the century's biggest health and financial crisis.As enemies attacks us,our
            brave soliders are fighting the battle on the borders to defend us; and our tenacious farmer
            working round the clock to feed us and families; and our healthcare workers are keeping us
            safe and healthy.But even in these challengers times we have great oppourtunity in our hands to serve
            our people and motherland.<br/><br/>
      
            When we are locked-down,the most affected are the childrens of our farmersand the poorest
            section of rural India,who work as migrants in the cities/towns to build our roads,buildings
            and factories for our and our's nation's properity.They are in a state of disarray.<br/><br/>
      
            They had gone back home to the rural areas of our hinterlands to save their lives.They had
            walked,cycled or gone on roads/railways in trucls/lorries/Sharamik train.Reaching back at home
            in their rural small hut,they find no source of livelihood near home-family needs food,old and 
            sick parents need medicine and children need education.<br/><br/>
            
            We have come together to fights this crisis and serve the poorest with this initative!<br/><br/>
            
            MoSahay app is a social initiative by IITians and other leading professionals to get migrants back to work.Most companies now acutely 
            require workers and most migrants desperately need their livlihood back.MoSahay aims to bridge gap
            while mitigating the health risks. We want to help our migrant brothers and sisters to reclaim their livelihood and dignity.</p>
            <h2 className={styles.h2}>MoSahay is not an app; but a social movement!</h2>
            <ul className={styles.ul}>
                <li>For moving back to work in India and abroad MoSahay will help</li>
                <li>For reskilling and upskilling,we will work with skills parterns</li>
                <li>For development self-employment solutions in native places of workers,we have partnered
                with Mart Global Solutions,India's leading consulting firm specialised in the rural economy</li>
            </ul>
                <h2 className={styles.h2}>Our Tech Advantage</h2>
                <ul className={styles.ul}>
                    <li>Simplicity:Easy Android & web interface for 2 simple forms-Skill Card and Health Card.</li>
                    <li>Modular:DevOps with microservices based architecture.</li>
                    <li>Interoperable:Open platform architecture with APIs.</li>
                    <li>Scalable:Cloud native development.</li>
                    <li>Security: Secure cloud data storage.</li>
                    <li>Data privacy:Adherence to rigorus GDPR standards.</li>
                    <li>Multi-lingual:Currently supports Hindi,English and Odia.Other Indian languages under development.</li>
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