import { GoogleLogin } from 'react-google-login';

const clientId = "883938822035-dj7j3okqd7q1855fegttrgnd37mvcbd8.apps.googleusercontent.com";


function Login() {
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN  FAILED! res: ", res);
    }

    return (
        <div id='signInButton'>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login; 