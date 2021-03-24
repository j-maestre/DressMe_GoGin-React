import { IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './dm-footer.css';

const DM_Footer: React.FC = () => {
   
        return (

                    <IonFooter>
                        <IonToolbar>
                            <IonTitle class="footer">&copy; Dress Me</IonTitle>
                        </IonToolbar>
                    </IonFooter>

    
        );
    
}
export default DM_Footer;