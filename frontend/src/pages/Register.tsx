import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonLabel, IonInput, IonItem, IonLoading } from '@ionic/react';
import React, { useContext, useState, useRef } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { AppContext } from '../State';
import './Register.css';
import { NavButtons } from '../components/NavButtons';
import logo from '../assets/img/dm-logo.svg'

const Register: React.FC = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  const [username, setUsername] = useState<React.ReactText | undefined>('');
  const [email, setEmail] = useState<React.ReactText | undefined>('');
  const [password, setPassword] = useState<React.ReactText | undefined>('');
  const [password2, setPassword2] = useState<React.ReactText | undefined>('');
  const [showLoading, setShowLoading] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = async e =>{
    e.preventDefault();

    try{
      console.log("-------------------------")
      console.log("username: ",username)
      if(password == password2){
        console.log("contraseñas correctas")
      }else{
        console.log("Contraseñas no coinciden")
      }

      setShowLoading(true);
      setTimeout(() => dispatch({ type: 'SET_USER', value: username }), 3000);
      // setShowLoading(false)

    }catch(e){
      console.error(e);
      setShowLoading(false);
    }
  }
  if (state.user) return <Redirect to="/home" />
  return (
    <IonPage className="probando2">
      <IonHeader>
        <IonToolbar className="probando" color={state.theme}>
          {/* <IonTitle>{logo}</IonTitle> */}
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* TODO */}
        <IonLoading isOpen={showLoading} message={'Logging in'} onDidDismiss={() => setShowLoading(false)} />
        <section className="login-header">
            <img src={logo} alt="D" className="login-header__image"/>
            <IonTitle className="login-header__title">RESS ME!</IonTitle>
        </section>

        <form onSubmit={handleSubmit} method="post" name="login_form" ref={formRef} action="" className="login_form">

        <section className="login-content">
          <IonItem>
            <IonLabel className="login-content__title" position="floating">Nombre de usuario</IonLabel>
            <IonInput type="text" value={username} required onInput={e => setUsername(e.currentTarget.value)} placeholder="Usuario" />
          </IonItem>
          <IonItem>
            <IonLabel className="login-content__title" position="floating">Correo electronico</IonLabel>
            <IonInput type="email" value={email} required onInput={e => setEmail(e.currentTarget.value)} placeholder="usuario@ejemplo.com" />
          </IonItem>
          <IonItem>
            <IonLabel className="login-content__title" position="floating">Contraseña</IonLabel>
            <IonInput type="password" value={password} required onInput={e => setPassword(e.currentTarget.value)} placeholder="Contraseña" />
          </IonItem>
          <IonItem>
            <IonLabel className="login-content__title" position="floating">Repetir Contraseña</IonLabel>
            <IonInput type="password" value={password2} required onInput={e => setPassword2(e.currentTarget.value)} placeholder="Contraseña" />
          </IonItem>

          <IonButton className="btn-submit-register" type="submit" id="btnLogin">Unirme</IonButton>
        
        </section>
        </form>
        

      </IonContent>
    </IonPage>
  );
};

export default Register;
