import React from 'react';
import './index.css';

import { AuthProvider } from './Contexts/AuthContext';
import DashBord from './Components/DashBord';


export default function App() {

   return (
   <AuthProvider>
     <DashBord>
      
     </DashBord>
   </AuthProvider>
  );
}