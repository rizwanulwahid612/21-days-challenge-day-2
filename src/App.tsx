import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { useAppDispatch } from './redux/hook';
import { auth } from './lib/firebase';
import { setLoading, setUser } from './redux/features/user/userSlice';
import { useEffect } from 'react';

function App() {
  const dispatch=useAppDispatch();
  useEffect(()=>{
    dispatch(setLoading(true))
  onAuthStateChanged(auth,(user)=>{
    if(user){
      dispatch(setUser(user.email!));
      dispatch(setLoading(true));
    }
    else{
      dispatch(setLoading(false))
    }
  })
  },[dispatch])

  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;