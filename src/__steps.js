// steps to intregate firebase
/**   ----------
 *        firebase setup
 *       ------------
 * 1. console.firebase.google.com
 * 2. create project
 * 3. register app (create config)
 * 4. install firebase (npm install firebase)
 * 5. add config file to your projects
 * 6. DANGER ! : DO not publish or make firebase config to public by pushing those to github 
 *     ---------
 *       integration
 *     ---------
 * 7. visit authentication > web > getStarted
 * 8. export app from the firebase config file (export default app)
 * 9. login.jsx: import {getAuth} from 'firebase/auth'
 * 10. create auth (const auth = getAuth(app))
 * -----------------
 *        provider setup
 * -----------------
 * 11. import google authprovider and create a new auth provider
 * 12. use SigninwithPopup and pass auth and provider
 * 13. activate sign in methods like google , facebook, email, github etc 
 * 14. change vite and use localhost with port name.
 * ------------
 * more auth provider (like github)
 * ------------
 * 1. activate the auth provider(create app, provide redirect url, client id ,client secreat)
 * 2. 
*/