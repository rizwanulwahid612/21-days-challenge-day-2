//import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
//import { useAppDispatch } from './redux/hook';
//import { auth } from './lib/firebase';
//import { setLoading, setUser } from './redux/features/user/userSlice';
//import { useEffect } from 'react';

function App() {



  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;