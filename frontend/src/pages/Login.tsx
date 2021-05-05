import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonLabel, IonInput, IonItem, IonLoading } from '@ionic/react';
import React, { useContext, useState, useRef } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { AppContext } from '../State';
import './Login.css';
import { NavButtons } from '../components/NavButtons';
import logo from '../assets/img/dm-logo.svg'

const Login: React.FC = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(AppContext);
  const [username, setUsername] = useState<React.ReactText | undefined>('');
  const [password, setPassword] = useState<React.ReactText | undefined>('');
  const [showLoading, setShowLoading] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = async e =>{
    e.preventDefault();

    try{
      console.log("-------------------------")
      console.log("username: ",username)

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
    <IonPage>
      <IonHeader>
        <IonToolbar color={state.theme}>
          {/* <IonTitle>{logo}</IonTitle> */}
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonLoading isOpen={showLoading} onDidDismiss={() => setShowLoading(false)} />
        {/* TODO */}
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
            <IonLabel className="login-content__title" position="floating">Contraseña</IonLabel>
            <IonInput type="password" value={password} required onInput={e => setPassword(e.currentTarget.value)} placeholder="Contraseña" />
          </IonItem>

          <IonButton className="btn-submit-login" type="submit" id="btnLogin">Entrar</IonButton>
        
        </section>
        </form>
        

      </IonContent>
    </IonPage>
  );
};

export default Login;
